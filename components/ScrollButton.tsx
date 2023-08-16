"use client";

export default function ScrollButton({
  children,
  toBottom = true,
}: {
  children: React.ReactNode;
  toBottom?: boolean;
}) {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        borderWidth: 0,
      }}
      onClick={() => {
        window.scrollTo({
          top: toBottom ? window.innerHeight + 200 : 0,
          behavior: "smooth",
        });
      }}
    >
      {children}
    </button>
  );
}
