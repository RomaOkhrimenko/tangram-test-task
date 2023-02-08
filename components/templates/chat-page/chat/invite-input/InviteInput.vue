<template>
  <div class="invite-input">
    <span>@</span>
    <input type="text" placeholder="Benutzername oder E-mail" />
    <button>Senden</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.invite-input {
  display: flex;
  align-items: center;
  padding: 0.8rem 0.8rem 0.8rem 1.6rem;
  background: #fff;
  border: 1px solid #dededf;
  border-radius: 4px;

  span {
    font-size: 1.3rem;
    font-weight: 600;
    color: #111;
    margin-right: 0.8rem;
    margin-bottom: 0.3rem;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0.7rem 0;
    outline: none;
    border: none;
    color: #111111;
    opacity: 0.48;
    font-size: 1.3rem;
    line-height: 16px;
  }
  button {
    background: rgba(111, 111, 111, 0.18);
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 16px;

    outline: none;
    border: none;
    padding: 0.8rem 3.2rem;
  }
}
</style>
