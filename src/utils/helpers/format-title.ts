export function formatJobTitle(title: string) {
  return title
    .replaceAll(' ', '-')
    .replaceAll(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
}
