"use client";

import { useEffect, useState } from "react";
import db from "../lib/firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { useSpring, animated } from "@react-spring/web";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  const props = useSpring({
    number: count,
    from: { number: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const updateVisitorCount = async () => {
      const currentYear = new Date().getFullYear();
      const docRef = doc(db, "visitors", "current");

      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          let data = docSnap.data();

          if (data.year === currentYear) {
            const newCount = data.count + 1;
            await updateDoc(docRef, { count: newCount });
            setCount(newCount);
          } else {
            await setDoc(docRef, { year: currentYear, count: 1 });
            setCount(1);
          }
        } else {
          await setDoc(docRef, { year: currentYear, count: 1 });
          setCount(1);
        }
      } catch (error) {
        console.error("Error updating visitor count:", error);
        setCount(0);
      }
    };

    updateVisitorCount();
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-2xl rounded-2xl p-8 mt-16 border border-gray-200">
      <div className="text-center flex flex-col items-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug">
          Welcome to <span className="text-indigo-600">Our Website</span>
        </h1>
        <p className="text-lg text-gray-600">
          Real-time visitor count (resets yearly)
        </p>
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl text-3xl font-bold shadow-lg mt-4 animate-bounce">
          Visitors this year:{" "}
          <animated.span>
            {props.number.to((n) => Math.floor(n))}
          </animated.span>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
