export async function getTotalFollowers(username) {
  const url = "https://api.hive.blog";
  const q = {
    jsonrpc: "2.0",
    method: "condenser_api.get_follow_count",
    params: [username],
    id: 1,
  };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(q),
    headers: { "Content-Type": "application/json" },
  });

  const json = await response.json();
  return json.result.follower_count;
}

// Función para obtener el total de personas que sigue el usuario
export async function getTotalFollowing(username) {
  const url = "https://api.hive.blog";
  const q = {
    jsonrpc: "2.0",
    method: "condenser_api.get_follow_count",
    params: [username],
    id: 1,
  };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(q),
    headers: { "Content-Type": "application/json" },
  });

  const json = await response.json();
  return json.result.following_count;
}
