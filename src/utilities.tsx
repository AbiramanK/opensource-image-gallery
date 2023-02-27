function setTheme(theme: "light" | "dark") {
  localStorage?.setItem("theme", theme);
}

async function getTheme(): Promise<"light" | "dark"> {
  return (
    ((await localStorage?.getItem("theme")) as "light" | "dark") ?? "light"
  );
}

export { setTheme, getTheme };
