{
  source: '/experince',
  destination: '/experience',
  permanent: true,
}
export default function ExperiencePage() {
  return (
    <div>
      <h1>Experience</h1>
      <p>Saurabh Anand Professional Experience</p>
    </div>
  );
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/experince',
        destination: '/experience',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
