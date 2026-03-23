import { MainLayout } from "@khlug/common-module";
import type { MenuItem } from "@khlug/common-module";

const menuItems: MenuItem[] = [];

type Props = {
  children: React.ReactNode;
};

function SampleLayout({ children }: Props) {
  return <MainLayout menuItems={menuItems}>{children}</MainLayout>;
}

export default SampleLayout;