<script lang="ts">
  export let loading = false
  export let width = '100px'
</script>

{#if loading}
  <div class="showbox" style="--width: { width }">
    <div class="loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>
{/if}

<style lang="scss">

  $green: #008744;
  $blue: #0057e7;
  $red: #d62d20;
  $yellow: #ffa700;
  $white: #eee;

  // scaling... any units
  $width: var(--width);

  .loader {
    position: relative;
    margin: 0 auto;
    width: calc($width * 0.8);

    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }

  .circular {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes color {
    100%,
    0% {
      stroke: $red;
    }
    40% {
      stroke: $blue;
    }
    66% {
      stroke: $green;
    }
    80%,
    90% {
      stroke: $yellow;
    }
  }

  // demo-specific
  body {
    background-color: $white;
  }
  .showbox {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>