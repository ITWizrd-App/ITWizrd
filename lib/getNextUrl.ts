export default function getNextUrl(
  currPath: string,
  path: string,
  firstNode: boolean = false
) {
  const baseAPIURL = process.env.NEXT_PUBLIC_CONTENT_API_URL as string;
  const baseAppURL = process.env.NEXT_PUBLIC_APP_URL as string;

  if (firstNode) {
    return baseAppURL + path;
  }

  if (path === "/") {
    return baseAPIURL;
  }

  if (currPath === "/") {
    return new URL(path, baseAPIURL).toString();
  }

  if (path.startsWith("http")) {
    // If the path is already a URL, return it as is
    return path;
  }

  if (path.startsWith("/")) {
    // These URLs are relative to the root of the site
    return new URL(path, baseAppURL).toString();
  }

  // These routes reference a route in the tree
  const currPathArr = currPath.split("/").filter(Boolean);
  const pathArr = path.split("/");
  const newPathArr = [...currPathArr];

  for (const segment of pathArr) {
    if (segment === "..") {
      if (newPathArr.length > 0) {
        newPathArr.pop(); // Go up one level if possible
      }
    } else if (segment !== "." && segment !== "") {
      newPathArr.push(segment); // Add new segment
    }
  }

  return new URL("/" + newPathArr.join("/"), baseAppURL).toString();
}
