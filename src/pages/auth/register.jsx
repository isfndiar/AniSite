import FormRegister from "../../components/Form/FormRegister";
import AuthLayouts from "../../layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts header="Register" desc="Create your Account">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
