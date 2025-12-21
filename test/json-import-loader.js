export async function resolve(specifier, context, nextResolve) {
  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (url.endsWith(".json")) {
    const result = await nextLoad(url, {
      ...context,
      importAttributes: { ...context.importAttributes, type: "json" },
    });
    return result;
  }
  return nextLoad(url, context);
}
