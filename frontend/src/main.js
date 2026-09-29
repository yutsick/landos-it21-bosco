import "./styles/base.css";
import { getSetting, getPages } from "./api";
import { hero } from "./blocks/hero/hero";

const app = document.querySelector("#app");

async function start() {
  try {
    const [settings, page] = await Promise.all([
      getSetting(),
      getPages(location.pathname),
    ]);

    document.title = `${page.title} - ${settings.siteName}`;
    const heroBlock = page.blocks.find((block) => block.type === "hero");
    app.innerHTML = hero(heroBlock);
  } catch (error) {
    app.textContent = `Something went wrong: ${error.message}`;
  }
}

start();
