<p align="center">
  <img alt="Vision quest" src="/src/images/demo.jpg" width="100%" />
</p>
<h1 align="center">
  Vision Quest
</h1>

This is a simple and attractive vision board creator. It generates a vision board you can run in any browser. It's free, open source, and works excellently.

## ✨ Features

- Easy to use—add photos to `src/photos/board`, and it will automatically generate the vision board
- Beautiful, simple design
- Responsive design for all devices
- High performance with super fast load times (it's using [Gatsby](https://www.gatsbyjs.com/))
- High resolution, optimised, zoomable images with blurred placeholders
- Free and open source
- Private—you own your data
- Works offline (PWA)
- Customisable avatar/name
- Easily deployable, or it can be run locally via `yarn develop`

## 🚀 Quick start

1.  **Fork the repository.**

    Fork this repository on GitHub to create your own vision board.

2.  **Add your vision board photos.**

    Add them to the `src/photos/board` directory:

    - If they're not stored in a subfolder (directly in `src/photos/board`), the photos will render at the top of the vision board without a title.
    - If they're stored in a subfolder, the subfolder name will be used as the section name. e.g `src/photos/board/Health & Fitness` will have a _"Health & Fitness"_ title for all its photos

    Some suggestions for finding high quality photos are [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), and [Pinterest](https://www.pinterest.com/).

    This vision board only supports `.jpg`, `.jpeg`, `.png`, and `.webp` photos.

3.  **Customise your vision board.**

    Add a `.env` file with your information to customise the vision board:

    ```shell
    cp .env.example .env
    ```

    Then edit `.env` in your editor.

4.  **Add your avatar.**

    Add a headshot of yourself to `src/images/avatar.jpg`. It will add this photo to the top of the vision board, above your name you configured in `.env`.

5.  **Start the development server.**

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
