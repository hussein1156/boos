/** يطلع رقم فيديو يوتيوب من أي شكل رابط، أو رجوع فاضي لو مش يوتيوب. */
export function youtubeId(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/,
  );
  return match ? match[1] : "";
}
