<script>
  import clonedeep from "lodash.clonedeep";
  import { onMount } from "svelte";

  const properties = {
    "font-size": {
      min: 8,
      max: 50,
      value: 16,
      step: 1,
      extension: "px",
      label: "Font Size",
    },
    "line-height": {
      min: 0,
      max: 5,
      value: 1,
      step: 0.05,
      extension: "",
      label: "Line Height",
    },
    "font-weight": {
      min: 100,
      max: 900,
      value: 400,
      step: 100,
      extension: "",
      label: "Font Weight",
    },
    "letter-spacing": {
      min: -1.5,
      max: 1.5,
      value: 0,
      step: 0.05,
      extension: "px",
      label: "Letter Spacing",
    },
    "word-spacing": {
      min: -1.5,
      max: 1.5,
      value: 0,
      step: 0.05,
      extension: "px",
      label: "Word Spacing",
    },
  };

  const fonts = {
    fallback: {
      ...properties,
      "letter-spacing": { ...properties["letter-spacing"], value: 0.05 },
      "word-spacing": { ...properties["word-spacing"], value: -0.15 },
    },
    webFont: clonedeep(properties),
  };

  $: stylingFallback = Object.entries(fonts.fallback)
    .map(([key, value]) => {
      return [`${key}: ${value.value}${value.extension}`];
    })
    .join("; ");

  $: stylingWebFont = Object.entries(fonts.webFont)
    .map(([key, value]) => {
      return [`${key}: ${value.value}${value.extension}`];
    })
    .join("; ");

  let fallbackFont = "sans-serif";
  let webFontName = "Roboto";

  const fetchWebFont = () => {
    var url = (url =
      "https://fonts.googleapis.com/css?family=" +
      webFontName.trim() +
      ":300,300i,400,400i,700,700i,900,900i");

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  };

  onMount(() => {
    fetchWebFont();
  });
</script>

<div class="grid grid-cols-2 gap-x-12 gap-y-8">
  <div class="space-y-8">
    <div>
      <h4 class="font-semibold">Fallback Font</h4>
      <label class="flex justify-between w-full">
        <p class="">Select fallback</p>

        <input
          type="text"
          bind:value={fallbackFont}
          class="simple-input mt-0"
        />
      </label>
    </div>

    <div class="space-y-4">
      {#each Object.entries(fonts.fallback) as [key, value]}
        <div>
          <p class="font-medium !my-0">{value.label}</p>

          <label class="flex">
            <p class="w-16">{value.value}{value.extension}</p>

            <input
              type="range"
              bind:value={value.value}
              min={value.min}
              max={value.max}
              step={value.step}
            />
          </label>
        </div>
      {/each}
    </div>
  </div>

  <div class="space-y-8">
    <div>
      <h4 class="font-semibold">Webfont</h4>
      <label class="flex justify-between w-full">
        <p class="">Select webfont</p>

        <div>
          <input type="text" bind:value={webFontName} class="simple-input" />
          <button on:click={fetchWebFont}>Load</button>
        </div>
      </label>
    </div>

    <div class="space-y-4">
      {#each Object.entries(fonts.webFont) as [key, value]}
        <div>
          <p class="font-medium !my-0">{value.label}</p>

          <label class="flex">
            <p class="w-16">{value.value}{value.extension}</p>

            <input
              type="range"
              bind:value={value.value}
              min={value.min}
              max={value.max}
              step={value.step}
            />
          </label>
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="relative my-8">
  <p
    style={`${stylingWebFont}; font-family: ${webFontName}; color: white`}
    class="absolute top-0 left-0 !my-0 z-0"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

  <p
    style={`${stylingFallback}; font-family: ${fallbackFont}; color: red`}
    class="m-0"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>

<style>
  label {
    display: flex;
  }

  input,
  p {
    margin: 6px;
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    background-color: var(--bg-body);

    margin: 18px 0;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: rgb(var(--color-track-red));
    border-radius: 99px;
  }
  input[type="range"]::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 99px;
    background: white;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6.5px;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: rgb(var(--color-track-red));
    border-radius: 99px;
  }
  input[type="range"]::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 99px;
    background: white;
    cursor: pointer;
    margin-top: -6.5px;
  }
</style>
