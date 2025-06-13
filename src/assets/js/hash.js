
export function encodeSecret(str, key = 17) {
    const xor = [...str].map(c => String.fromCharCode(c.charCodeAt(0) ^ key)).join('');
    return btoa(xor);
  }
  
  export function decodeSecret(encoded, key = 17) {
    const xor = atob(encoded);
    return [...xor].map(c => String.fromCharCode(c.charCodeAt(0) ^ key)).join('');
  }