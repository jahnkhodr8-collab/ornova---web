// صفحه اصلی پروفایل
const avatarDiv = document.querySelector('.avatar');
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

// پنل کشویی پروفایل
const profileSlidePanel = document.getElementById('profileSlidePanel');
const slideSaveBtn = document.getElementById('slideSaveBtn');
const slideAvatarUpload = document.getElementById('slideAvatarUpload');

avatarDiv.addEventListener('click', () => {
  profileSlidePanel.classList.toggle('active');
});

slideAvatarUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(event){
      document.getElementById('slideAvatar').src = event.target.result;
    }
    reader.readAsDataURL(file);
  }
});

slideSaveBtn.addEventListener('click', () => {
  alert('Profile saved from slide panel!');
  profileSlidePanel.classList.remove('active');
});
