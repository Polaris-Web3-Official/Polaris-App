export async function getComments(author, permlink) {
  const data = {
    jsonrpc: "2.0",
    method: "condenser_api.get_content_replies",
    params: [author, permlink],
    id: 1,
  };

  try {
    const response = await fetch("https://api.hive.blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const comments = await response.json();
    comments.result = comments.result.map((comment) => {
      comment.body = comment.body.replace(/<[^>]*>?/gm, "");
      return comment;
    });

    return comments.result;
  } catch (error) {
    console.error(error);
    return [];
  }
}
