import "./styles/base.css";
import { getSetting, getPages } from "./api";
import { renderBlocks } from "./render";

const app = document.querySelector("#app");

async function start() {
  try {
    const [settings, page] = await Promise.all([
      getSetting(),
      getPages(location.pathname),
    ]);

    document.title = `${page.title} - ${settings.siteName}`;

    app.innerHTML = `<main>${renderBlocks(page.blocks)}</main>`;
  } catch (error) {
    app.textContent = `Something went wrong: ${error.message}`;
  }
}

start();
