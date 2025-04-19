
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, where } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCNaTMPhG1oe4c3BsdnHBLVQZspzUMbZVk",
    authDomain: "bs-comments.firebaseapp.com",
    projectId: "bs-comments",
    storageBucket: "bs-comments.firebasestorage.app",
    messagingSenderId: "1036756085818",
    appId: "1:1036756085818:web:5f23aed5881efc02fe9903"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firestore
  const db = getFirestore(app);

  // Get references to your HTML elements
  const commentsContainer = document.getElementById('comments-container');
  const commentForm = document.getElementById('comment-form');
  const nameInput = document.getElementById('name');
  const commentInput = document.getElementById('comment');
  const commentSubmissionStatus = document.getElementById('comment-submission-status');

  // Function to get the current page identifier
  function getPageId() {
    return window.location.pathname;
  }

  // Function to display comments
  function displayComments(comments) {
    commentsContainer.innerHTML = '';
    if (comments.length === 0) {
      commentsContainer.innerHTML = '<p>No comments yet. Be the first to comment!</p>';
      return;
    }
    comments.forEach(comment => {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment'); // You can add CSS for styling
      commentDiv.innerHTML = `
        <p><strong>${comment.name}:</strong> ${comment.text}</p>
        <small>Posted on: ${new Date(comment.timestamp.seconds * 1000).toLocaleString()}</small>
      `;
      commentsContainer.appendChild(commentDiv);
    });
  }

  // Function to load comments from Firestore for the current page
  function loadComments() {
    const pageId = getPageId();
    const commentsRef = collection(db, 'comments');
    const q = query(commentsRef, where('pageId', '==', pageId), orderBy('timestamp', 'desc'));

    onSnapshot(q, (snapshot) => {
      const comments = [];
      snapshot.forEach((doc) => {
        comments.push({ id: doc.id, ...doc.data() });
      });
      displayComments(comments);
    });
  }

  // Event listener for comment submission
  commentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const text = commentInput.value.trim();
    const pageId = getPageId();

    if (name && text) {
      commentSubmissionStatus.textContent = 'Submitting comment...';
      try {
        await addDoc(collection(db, 'comments'), {
          pageId: pageId,
          name: name,
          text: text,
          timestamp: serverTimestamp() // Use server timestamp for accuracy
        });
        nameInput.value = '';
        commentInput.value = '';
        commentSubmissionStatus.textContent = 'Comment submitted successfully!';
        setTimeout(() => {
          commentSubmissionStatus.textContent = '';
        }, 3000); // Clear status after 3 seconds
      } catch (error) {
        console.error('Error adding comment: ', error);
        commentSubmissionStatus.textContent = 'Failed to submit comment. Please try again.';
      }
    } else {
      commentSubmissionStatus.textContent = 'Please enter your name and comment.';
    }
  });

  // Load initial comments when the page loads
  loadComments();
