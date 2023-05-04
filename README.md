<p align="center">
  <img alt="Screenshot of Vision Quest" src="/src/images/demo.jpg" width="100%" />
</p>
<p align="center">
  <img alt="Logo" src="/src/images/icon.svg" width="70px" />
</p>
<h1 align="center">
  Vision Quest
</h1>

**This is a simple and attractive vision board creator.** It generates a personal vision board you can run in any browser. It's free, open source, and works excellently.

If you're unfamiliar with the concept of a vision board, it's a series of photos for each area of your life. You can use it for inspiration, motivation, and visualisation. Regardless of whether you believe in the law of attraction or not, it's still a powerful tool.

I made this project because I was dissatisfied with other vision board creation software, and wanted something that would meet my needs. It's open source so anyone can enjoy it.

## ✨ Features

- **Easy to use**—add photos to subfolders in `src/photos/board`, and it will automatically generate the vision board
- **Beautiful, simple, and responsive design**
- **High performance** and statically generated, with super fast load times (it's using [Gatsby](https://www.gatsbyjs.com/))
- **Self-host anywhere or run locally** on your device
- High resolution, optimised, and zoomable images with blurred placeholders
- [Progressive Web App](https://web.dev/progressive-web-apps/) (works offline + installable on devices)
- Free and open source
- Private—you own your data
- Customisable avatar/name

## 🚀 Quick start

1.  **Fork the repository.**

    Fork this repository on GitHub to create your own vision board.

2.  **Install the dependencies.**

    Install the project's dependencies with [Yarn](https://yarnpkg.com/):

    ```shell
    yarn install
    ```

3.  **Add photos to your vision board.**

    **a)** Create a subfolder for each section of your vision board, such as `src/photos/board/Health & Fitness`. The name of the subfolder will be used as a title for the section on the vision board, e.g _"Health & Fitness"_

    **b)** Add photos to each subfolder. The filename of each photo will be used as its tooltip/alt text.

    **Supported image formats:** `.jpg`, `.jpeg`, `.png`, and `.webp`

    Some website suggestions for finding high quality, interesting photos are [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), and [Pinterest](https://www.pinterest.com/).

4.  **Configure the environment variables.**

    Create a `.env` file using `.env.example`:

    ```shell
    cp .env.example .env
    ```

    Then edit `.env` in your editor with your preferred settings.

    Note if `GATSBY_SENTRY_DSN` is not set, [Sentry](https://sentry.io/) will be disabled.

5.  **Add your avatar.**

    Add a headshot of yourself to `src/images/avatar.jpg`. It will add this photo to the top of the vision board.

6.  **Start the development server.**

    ```shell
    cd vision-quest/
    yarn develop
    ```

    The server will run on `http://localhost:8000`.

## 🚀 Deployment

You can build the vision board and deploy it manually yourself:

```shell
yarn build
yarn serve
```

Or you can deploy your vision board with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)

If you deploy it online, I suggest adding password protection for privacy. Netlify has an option for this, as do most cloud services.

Otherwise you can run it locally on your device with the development server (or `yarn build` and `yarn serve`).

## 🛠️ Utility commands

Run Prettier:

```shell
yarn prettier
yarn prettier:fix # Fix errors
```

Run ESLint:

```shell
yarn lint
yarn lint:fix # Fix errors
```

Run TypeScript checking:

```shell
yarn typecheck
```

Remove `node_modules`, `.cache`, and `public` folders for regeneration:

```shell
yarn clean
```

## 👨‍💻 Tech stack

These are the primary technologies and libraries used in this project:

- [Gatsby.js](https://www.gatsbyjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [Emotion Styled Components](https://emotion.sh/docs/styled)
- [TypeScript](https://www.typescriptlang.org/)
- [heroicons](https://heroicons.com/)
- [react-medium-image-zoom](https://github.com/rpearce/react-medium-image-zoom)
