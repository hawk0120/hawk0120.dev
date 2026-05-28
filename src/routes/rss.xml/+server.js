export async function GET() {
  const response = await fetch('https://eurosky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:da6iyhwpub7pnqbj5booh2by&collection=site.standard.document');
  const res = await response.json();

  const documents = res.records
    .map(record => ({
      id: record.uri,
      title: record.value.title,
      description: record.value.description || '',
      publishedAt: record.value.publishedAt
    }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const siteUrl = 'https://www.bradyhawkins.dev';

  const items = documents.map(doc => {
    const link = `${siteUrl}/blog/${encodeURIComponent(doc.id)}`;
    const pubDate = new Date(doc.publishedAt).toUTCString();

    return `
    <item>
      <title><![CDATA[${doc.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${doc.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>bradyhawkins.dev</author>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Brady Hawkins</title>
    <link>${siteUrl}</link>
    <description>Personal blog of Brady Hawkins, a Canadian software engineer in the Netherlands</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}
