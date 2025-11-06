function openProfile() {
  document.getElementById("profileSlide").classList.add("open");
}

function closeProfile() {
  document.getElementById("profileSlide").classList.remove("open");
}

function saveProfile() {
  const name = document.getElementById("profileName").innerText;
  const bio = document.getElementById("profileBio").value;
  const avatar = document.getElementById("avatarUpload").files[0];

  // ذخیره اطلاعات (فعلا فقط کنسول)
  console.log("Saved Profile:", { name, bio, avatar });

  alert("Profile saved successfully!");
  closeProfile();
}
