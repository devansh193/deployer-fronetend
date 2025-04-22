interface Props {
  children: React.ReactNode;
}
export const NewLayout = ({ children }: Props) => {
  return (
    <div className="w-full bg-[#171717]">
      <Navbar />
      <div className="flex min-h-screen pt-[3rem]">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};
