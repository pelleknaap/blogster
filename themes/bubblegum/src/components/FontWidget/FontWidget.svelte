<script>
    import clonedeep from "lodash.clonedeep";
    import uniq from "lodash.uniq";
    import {onMount} from "svelte";
    import RangeSlider from "svelte-range-slider-pips";

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
            value: 300,
            step: 100,
            extension: "",
            label: "Font Weight",
        },
        "letter-spacing": {
            min: -2,
            max: 2,
            value: 0,
            step: 0.05,
            extension: "px",
            label: "Letter Spacing",
        },
        "word-spacing": {
            min: -2,
            max: 2,
            value: 0,
            step: 0.05,
            extension: "px",
            label: "Word Spacing",
        },
    };

    const fonts = {
        fallback: properties,
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

    let fallbackFont = "sans-serif"
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

    onMount(async () => {
        fetchWebFont()

        // &text=abc is already supported, subsets not yet
        const res = await fetch("https://fonts.googleapis.com/css?family=Roboto+Mono&text=abc", {method: "GET"})
        const text = await res.text()
        console.log(text)
        const re = /(?<=url\()(.*)(?=\) format)/g;
        const matches = [...text.matchAll(re)].map((match) => match[0]);
        console.log(uniq(matches))
        let length = 0;
        await Promise.all(uniq(matches).map(async link => {
            const res = await fetch(link, {method: "HEAD"})
            length += parseInt(res.headers.get("content-length")) / 1000
        }))
        console.log(Math.floor(length) + "kb")
    });

    let RangeSliderComponent;
    onMount(() => {
        RangeSliderComponent = RangeSlider;
    });

    let test = [50]

</script>

<div class="grid grid-cols-2">
    <div>
        <div>
            <input type="text" bind:value={fallbackFont} class="bg-bg-body w-32 border-text-link border-b-2"/>
        </div>

        {#each Object.entries(fonts.fallback) as [key, value]}
            <div>
                <p class="text-white !my-0">{value.label}</p>

                <div>
                    <svelte:component this={RangeSliderComponent} values={test} pips min={value.min}
                                      max={value.max}
                                      step={value.step} class="w-full"/>

                    <input bind:value={test[0]} />

                    <p>{value.value}{value.extension}</p>
                </div>
            </div>
        {/each}
    </div>

    <div>
        <div>
            <input type="text" bind:value={webFontName} class="bg-bg-body w-32 border-text-link border-b-2"/>
            <button on:click={fetchWebFont}>Fetch Font</button>
        </div>

        {#each Object.entries(fonts.webFont) as [key, value]}
            <div>
                <p class="text-white !my-0">{value.label}</p>

                <label>
                    <input
                            type="range"
                            bind:value={value.value}
                            min={value.min}
                            max={value.max}
                            step={value.step}
                    />

                    <p>{value.value}{value.extension}</p>
                </label>
            </div>
        {/each}
    </div>
</div>

<div class="relative">
    <p style={stylingFallback} style:font-family={fallbackFont} class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <p
            style={stylingWebFont}
            style:font-family={webFontName}
            class="absolute top-0 left-0 text-primary-blue !my-0"
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</div>

Based on <a href="https://meowni.ca/font-style-matcher/" target="_about" ref="noopener">Monica Dinculescu</a> her work

<style>
    label {
        display: flex;
    }

    input,
    p {
        margin: 6px;
    }
</style>
