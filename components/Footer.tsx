export default function Footer() {
  return (
    <footer className="w-full  p-10 flex justify-center text-center text-xs bg-navBlue text-white">
      <p>
        Powered by{" "}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Supabase, NextJS, and AWS
        </a>
      </p>
    </footer>
  );
}
