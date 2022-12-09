import { CgSpinner } from "react-icons/cg";

interface Prop {
  className?: string;
  loading?: Boolean;
}
export default ({ className, loading = false }: Prop) => (
  <CgSpinner className={`mx-auto animate-spin text-3xl ${className} `} />
);
