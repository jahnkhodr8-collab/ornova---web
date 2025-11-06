<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ornova Profile</title>
  <link rel="stylesheet" href="profile.css" />
</head>
<body>
  <header class="header">
    <h1>My Profile</h1>
    <nav>
      <a href="../index.html">🏠 Home</a>
      <a href="index.html" class="active">👤 Profile</a>
      <a href="#">🌍 Explore</a>
    </nav>
  </header>

  <main class="profile-container">
    <div class="avatar"></div>

    <div class="profile-info">
      <label for="username">Username:</label>
      <input type="text" id="username" value="YourNameHere">

      <label for="bio">Bio:</label>
      <textarea id="bio" rows="3">This is your profile bio. Edit it soon!</textarea>

      <label for="wallet">Wallet Balance:</label>
      <input type="text" id="wallet" value="1000 ORN" readonly>

      <label for="avatar-upload">Upload Avatar:</label>
      <input type="file" id="avatar-upload" accept="image/*">

      <button id="save-profile">Save Profile</button>
    </div>
  </main>

  <script src="profile.js"></script>
</body>
</html>body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

.header {
  background-color: #0077ff;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header nav a {
  color: white;
  margin-left: 15px;
  text-decoration: none;
}

.header nav a.active {
  font-weight: bold;
  text-decoration: underline;
}

.profile-container {
  max-width: 500px;
  margin: 30px auto;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  margin: 0 auto 20px;
  background-size: cover;
}

.profile-info label {
  display: block;
  margin-top: 15px;
  font-weight: bold;
  color: #004aad;
}

.profile-info input[type="text"],
.profile-info textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.profile-info button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.profile-info button:hover {
  opacity: 0.8;
}const avatarDiv = document.querySelector('.avatar');
const avatarUpload = document.getElementById('avatar-upload');
const usernameInput = document.getElementById('username');
const bioInput = document.getElementById('bio');
const saveBtn = document.getElementById('save-profile');

avatarUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(event){
      avatarDiv.style.backgroundImage = `url(${event.target.result})`;
      avatarDiv.style.backgroundSize = 'cover';
    }
    reader.readAsDataURL(file);
  }
});

saveBtn.addEventListener('click', () => {
  alert(`Profile Saved!\nUsername: ${usernameInput.value}\nBio: ${bioInput.value}`);
});
