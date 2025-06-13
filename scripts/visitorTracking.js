// visitorTracking.js

// Load Google Analytics
(function loadGA() {
  const gtagScript = document.createElement("script");
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-8WYM5E4V2L";
  gtagScript.async = true;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-8WYM5E4V2L');
})();

// Load Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, runTransaction } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG1_oBH8XaF_ftrlQrxwqVTS4UVToEpCQ",
  authDomain: "bs-f7a50.firebaseapp.com",
  databaseURL: "https://bs-f7a50-default-rtdb.firebaseio.com", // <-- Add this line for Realtime DB
  projectId: "bs-f7a50",
  storageBucket: "bs-f7a50.appspot.com",
  messagingSenderId: "706705197188",
  appId: "1:706705197188:web:72d60c3915a6ef4842dad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Generate a safe page key (e.g., "home", "about_me")
const pageKey = location.pathname.replace(/\/|\.html/g, "_") || "home";
const totalRef = ref(db, "visits/_total");
const pageRef = ref(db, `visits/${pageKey}`);

// Increment total counter
runTransaction(totalRef, (current) => (current || 0) + 1).catch((e) =>
  console.error("Total count failed:", e)
);

// Increment page-specific counter
runTransaction(pageRef, (current) => (current || 0) + 1).catch((e) =>
  console.error("Page count failed:", e)
);