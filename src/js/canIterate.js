export default function canIterate(obj) {
  try {
    return (obj[Symbol.iterator] !== undefined) || false;
  } catch (e) {
    return false;
  }
}
