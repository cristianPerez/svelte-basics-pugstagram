<script>
  export let name;
  export let nickname;
</script>

<div class="Profile">
  <div class="Profile-container">
    <div class="Profile-avatar">
      <img
        alt="Profile of the user"
        src="https://static.platzi.com/media/avatars/avatars/cristiancamildd817d4cd2d94c89_2f297ed9-3ff7-4d83-8886-df5a174e9fc1.jpeg"
      />
    </div>
    <div class="Profile-info">
      <h2>{nickname}</h2>
      <span>{name}</span>
    </div>
  </div>
</div>

<style>
  .Profile-container {
    display: flex;
    align-items: center;
  }
  .Profile-avatar img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .Profile-info {
    margin: 0 0 0 0.5em;
  }
  .Profile-info h2 {
    font-size: 14px;
    color: black;
    margin: 0;
    padding: 0;
  }
  .Profile-info span {
    font-size: 12px;
    font-weight: normal;
  }
</style>
