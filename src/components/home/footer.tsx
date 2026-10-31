function Footer() {
  return (
    <div className="grid h-60 w-full grid-cols-2 place-content-center gap-x-25 gap-y-8 bg-orange-300 p-12">
      <p className="col-span-2 text-5xl font-bold">hello@conor.io</p>
      <div className="flex flex-row gap-3 text-sm">
        <p className="rounded-xl border px-2">Dribbble</p>
        <p className="rounded-xl border px-2">Behance</p>
        <p className="rounded-xl border px-2">Behance</p>
        <p className="rounded-xl border px-2">Instagram</p>
      </div>
      <div className="flex flex-row gap-3 text-sm font-bold">
        <p>Home</p>
        <p>Case Studies</p>
        <p>About</p>
        <p>Content</p>
      </div>
    </div>
  );
}

export default Footer;
