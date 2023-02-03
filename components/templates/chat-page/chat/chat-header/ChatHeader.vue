<template>
  <div class="chat-header">
    <div class="chat-header-left">
      <ChatAvatar status="online" />

        <div class="chat-header-left__info">
          <h3>Mats Hummels</h3>
          <a href="#"><b>Montage</b>, Mats Hummels, Platz 24 60594 Frankfurt a ...</a>
        </div>

    </div>

    <div class="chat-header-right">
      <div class="chat-header-members">
        <h3>Mitglieder:</h3>

        <div class="chat-header-members__plus">
          <div class="chat-header-members__plus-container">
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g id="invisible_box" data-name="invisible box">
                <rect id="Прямоугольник_393" data-name="Прямоугольник 393" width="24" height="24" fill="none"/>
              </g>
              <g id="icons_Q2"  data-name="icons Q2" transform="translate(3.5 3.5)">
                <path id="Контур_2937" data-name="Контур 2937" d="M23,14.5H16.5V8a1,1,0,0,0-2,0v6.5H8a1,1,0,0,0,0,2h6.5V23a1,1,0,0,0,2,0V16.5H23a1,1,0,0,0,0-2Z" transform="translate(-7 -7)" fill="currentColor"/>
              </g>
            </svg>
          </div>
        </div>

        <div class="chat-header-members__member">
          <div class="chat-header-members__member-container">
            <ChatAvatar status="online" />
          </div>
        </div>

        <div class="chat-header-members__member">
          <div class="chat-header-members__member-container">
            <ChatAvatar status="offline" />
          </div>
        </div>

        <span>+4</span>

      </div>


      <div class="chat-header-right__line" />

      <div class="chat-header-right__params">
        <svg id="settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path id="Контур_439" data-name="Контур 439" d="M0,0H24V24H0Z" fill="none"/>
          <path id="Контур_440" data-name="Контур 440" d="M15.95,10.78A6.527,6.527,0,0,0,16,10a4.932,4.932,0,0,0-.06-.78L17.63,7.9a.413.413,0,0,0,.1-.51l-1.6-2.77a.407.407,0,0,0-.49-.18l-1.99.8a5.859,5.859,0,0,0-1.35-.78L12,2.34A.4.4,0,0,0,11.6,2H8.4a.389.389,0,0,0-.39.34l-.3,2.12a6.015,6.015,0,0,0-1.35.78l-1.99-.8a.4.4,0,0,0-.49.18L2.28,7.39a.388.388,0,0,0,.1.51L4.07,9.22a4.713,4.713,0,0,0-.01,1.56L2.37,12.1a.413.413,0,0,0-.1.51l1.6,2.77a.407.407,0,0,0,.49.18l1.99-.8a5.859,5.859,0,0,0,1.35.78L8,17.66a.407.407,0,0,0,.4.34h3.2a.382.382,0,0,0,.39-.34l.3-2.12a6.015,6.015,0,0,0,1.35-.78l1.99.8a.4.4,0,0,0,.49-.18l1.6-2.77a.388.388,0,0,0-.1-.51l-1.67-1.32ZM10,13a3,3,0,1,1,3-3A3.009,3.009,0,0,1,10,13Z" transform="translate(1.778 2)" fill="#111"/>
        </svg>
      </div>

    </div>
  </div>
</template>

<script>
import ChatAvatar from "@/components/templates/blocks/ChatAvatar.vue";

export default {
  components: {ChatAvatar}

}
</script>

<style lang="scss" scoped>
.chat-header {
  padding: 1.6rem 3.6rem 1.6rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #D9D9D9;;

  &-left {
    display: flex;
    align-items: center;

    &__info {
      margin-left: 1.6rem;
      margin-right: 1.5rem;

      h3 {
        font-size: 2rem;
        line-height: 24px;
        margin-bottom: 0.8rem;
        font-weight: 500;
      }

      a {
        font-size: 1.3rem;
        line-height: 16px;
        text-decoration: underline;
        color: #007AFF;

        b {
          font-weight: 500;
        }
      }
    }
  }

  &-right {
    display: flex;
    align-items: center;

    &__line {
      height: 48px;
      width: 1px;
      background-color: #d9d9d9;
      margin-right: 3.6rem;
      margin-left: 1rem;
    }
  }

  &-members {
    display: flex;
    align-items: center;
    position: relative;

    h3 {
      font-size: 1.7rem;
      line-height: 20px;
      font-weight: 500;
      margin-right: 2rem;
    }
    &__plus {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 3;
      &-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        border: 1px solid #007AFF;

        svg {
          color: #007AFF;
        }
      }
    }

    &__member {
      position: relative;
      z-index: 2;

      right: 15px;

      &-container {
        background-color: #fff;
        border-radius: 50%;
        width: 64px;
        height: 64px;
        display: flex;justify-content: center;
        align-items: center;
      }

      &:nth-child(4) {
        right: 35px;
        z-index: 1;
      }
    }

    span {
      position: relative;
      right: 2.2rem;
      font-size: 1.3rem;
      line-height: 16px;
    }

    &__list {
      position: absolute;
      top: 100%;
      width: 280px;
      display: flex;
      right: 0;
      flex-direction: column;
    }
  }

  &__params {
    svg {
      color: #111111;
    }
  }
}
 </style>
