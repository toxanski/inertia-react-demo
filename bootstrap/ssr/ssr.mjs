import * as jsxRuntime from "react/jsx-runtime";
import * as React from "react";
import { forwardRef, useRef, useEffect, createContext, useState, useContext, Fragment as Fragment$1 } from "react";
import { Link, useForm, Head, usePage, createInertiaApp } from "@inertiajs/react";
import { Layout, Divider, ConfigProvider, Form, Button, Typography, Input, Checkbox as Checkbox$1, Avatar, Menu, Breadcrumb, Card, Radio, Select, TreeSelect, Cascader, DatePicker, InputNumber, Switch } from "antd";
import styled from "@emotion/styled";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Transition, Dialog } from "@headlessui/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
function ApplicationLogo({ className }) {
  return /* @__PURE__ */ jsx("svg", { className, viewBox: "0 0 316 316", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z" }) });
}
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "w-20 h-20 fill-current text-gray-500" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg", children })
  ] });
}
function InputError({ message, className = "" }) {
  return message ? /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600 " + className, children: message }) : null;
}
function InputLabel({ forInput, value, className, children }) {
  return /* @__PURE__ */ jsx("label", { htmlFor: forInput, className: `block font-medium text-sm text-gray-700 ` + className, children: value ? value : children });
}
function PrimaryButton({ type = "submit", className = "", processing, children, onClick }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type,
      onClick,
      className: `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${processing && "opacity-25"} ` + className,
      disabled: processing,
      children
    }
  );
}
const TextInput = forwardRef(function TextInput2({ type = "text", name, id, value, className, autoComplete, required, isFocused, handleChange }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsx(
    "input",
    {
      type,
      name,
      id,
      value,
      className: `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` + className,
      ref: input,
      autoComplete,
      required,
      onChange: (e) => handleChange(e)
    }
  ) });
});
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "This is a secure area of the application. Please confirm your password before continuing." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            handleChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", processing, children: "Confirm" }) })
    ] })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "password",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          handleChange: onHandleChange
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox({ name, value, handleChange }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "checkbox",
      name,
      value,
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500",
      onChange: (e) => handleChange(e)
    }
  );
}
function Login$1({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox" ? event.target.checked : event.target.value
    );
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            handleChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            handleChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            value: data.remember,
            handleChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-600", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Forgot your password?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", processing, children: "Log in" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login$1
}, Symbol.toStringTag, { value: "Module" }));
const Footer = () => /* @__PURE__ */ jsx(
  Layout.Footer,
  {
    style: {
      textAlign: "right"
    },
    children: "@Ant Design ©2023 Created by Ant UED"
  }
);
const SvgLogo = (props) => /* @__PURE__ */ React.createElement("svg", { width: 178, height: 22, viewBox: "0 0 178 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_4840_5575)" }, /* @__PURE__ */ React.createElement("path", { d: "M3.25737 3.99675H11.845V18.105H10.2798V5.47738H4.8226V13.0497C4.8226 13.7125 4.81555 14.2131 4.80145 14.5515C4.78735 14.8758 4.67454 15.3411 4.46302 15.9475C4.26561 16.5397 3.96243 17.0192 3.5535 17.3858C2.91894 17.9499 2.11518 18.2319 1.1422 18.2319C0.916577 18.2319 0.634553 18.1896 0.296125 18.105V16.6244C0.578148 16.709 0.83902 16.7513 1.07874 16.7513C1.62869 16.7513 2.08697 16.568 2.45361 16.2013C2.70743 15.9475 2.89779 15.5879 3.0247 15.1226C3.15161 14.6431 3.22212 14.2413 3.23622 13.9169C3.25032 13.5926 3.25737 13.092 3.25737 12.4152V3.99675ZM25.3078 18.105V7.33873L15.4933 18.7395V3.99675H17.0586V14.8053L26.873 3.4045V18.105H25.3078ZM30.5103 18.105V3.99675H32.0755V16.6244H39.2248V3.99675H40.79V16.6244H42.3976V21.0662H40.9169V18.105H30.5103ZM53.9487 18.105L52.2989 14.1284H46.2918L44.5997 18.105H42.8652L49.3588 3.31989L55.6832 18.105H53.9487ZM46.9052 12.6478H51.6855L49.3165 7.0003L46.9052 12.6478Z", fill: "#111827" }), /* @__PURE__ */ React.createElement("path", { d: "M88.9409 3.99687V10.0462L94.9479 3.99687H97.0631L90.4638 10.575L97.2746 18.105H95.1172L89.3428 11.6326L88.9409 12.0345V18.105H87.3757V3.99687H88.9409ZM104.855 10.575V9.32707H106.378V18.105H104.855V16.8782C104.093 17.8653 103.092 18.3588 101.851 18.3588C100.667 18.3588 99.6584 17.9499 98.8265 17.132C97.9945 16.3141 97.5785 15.172 97.5785 13.7054C97.5785 12.2671 97.9874 11.1461 98.8053 10.3423C99.6373 9.52448 100.653 9.11555 101.851 9.11555C103.12 9.11555 104.121 9.60204 104.855 10.575ZM102.02 10.4693C101.217 10.4693 100.533 10.7583 99.9686 11.3365C99.4187 11.9005 99.1437 12.6902 99.1437 13.7054C99.1437 14.6784 99.3975 15.4751 99.9052 16.0956C100.427 16.7019 101.132 17.0051 102.02 17.0051C102.909 17.0051 103.614 16.6878 104.136 16.0533C104.671 15.4187 104.939 14.6432 104.939 13.7266C104.939 12.6831 104.643 11.8794 104.051 11.3153C103.459 10.7513 102.782 10.4693 102.02 10.4693ZM109.262 18.105V9.32707H110.785V12.9228H114.931V9.32707H116.454V18.105H114.931V14.3188H110.785V18.105H109.262ZM119.956 9.32707H126.132V16.709H127.444V20.4317H126.048V18.105H119.364V20.4317H117.968V16.709C118.701 16.6949 119.244 16.3141 119.596 15.5668C119.836 15.0733 119.956 14.2977 119.956 13.2401V9.32707ZM124.609 16.709V10.7231H121.479V14.0227C121.479 15.1931 121.126 16.0885 120.421 16.709H124.609ZM129.05 9.32707H130.573V15.1226L136.58 8.65022V18.105H135.057V12.246L129.05 18.7184V9.32707ZM140.095 9.32707H146.272V16.709H147.583V20.4317H146.187V18.105H139.503V20.4317H138.107V16.709C138.84 16.6949 139.383 16.3141 139.736 15.5668C139.976 15.0733 140.095 14.2977 140.095 13.2401V9.32707ZM144.749 16.709V10.7231H141.618V14.0227C141.618 15.1931 141.266 16.0885 140.561 16.709H144.749ZM155.916 10.575V9.32707H157.439V18.105H155.916V16.8782C155.154 17.8653 154.153 18.3588 152.912 18.3588C151.728 18.3588 150.72 17.9499 149.888 17.132C149.056 16.3141 148.64 15.172 148.64 13.7054C148.64 12.2671 149.049 11.1461 149.867 10.3423C150.699 9.52448 151.714 9.11555 152.912 9.11555C154.182 9.11555 155.183 9.60204 155.916 10.575ZM153.082 10.4693C152.278 10.4693 151.594 10.7583 151.03 11.3365C150.48 11.9005 150.205 12.6902 150.205 13.7054C150.205 14.6784 150.459 15.4751 150.966 16.0956C151.488 16.7019 152.193 17.0051 153.082 17.0051C153.97 17.0051 154.675 16.6878 155.197 16.0533C155.733 15.4187 156.001 14.6432 156.001 13.7266C156.001 12.6831 155.704 11.8794 155.112 11.3153C154.52 10.7513 153.843 10.4693 153.082 10.4693ZM166.076 10.7231H163.327V18.105H161.804V10.7231H159.054V9.32707H166.076V10.7231ZM167.677 18.105V9.32707H169.2V12.6902H170.765C171.978 12.6902 172.866 12.9792 173.43 13.5574C173.881 14.0086 174.107 14.622 174.107 15.3976C174.107 16.2154 173.846 16.8711 173.324 17.3647C172.802 17.8582 171.942 18.105 170.744 18.105H167.677ZM169.2 16.7513H170.617C171.251 16.7513 171.703 16.6737 171.97 16.5186C172.351 16.2648 172.542 15.8911 172.542 15.3976C172.542 14.8899 172.358 14.5233 171.992 14.2977C171.738 14.1285 171.287 14.0439 170.638 14.0439H169.2V16.7513ZM175.164 18.105V9.32707H176.687V18.105H175.164Z", fill: "#111827" }), /* @__PURE__ */ React.createElement("circle", { cx: 69.9438, cy: 10.7663, r: 10.7527, transform: "rotate(-91.4047 69.9438 10.7663)", fill: "#F1DF6F" }), /* @__PURE__ */ React.createElement("path", { d: "M83.6007 11.584L80.3375 11.664C79.2415 8.74582 77.2884 3.24931 78.2249 3.84097C79.1613 4.43263 82.1974 9.18552 83.6007 11.584Z", fill: "#F1DF6F" }), /* @__PURE__ */ React.createElement("circle", { cx: 66.9433, cy: 7.46425, r: 1.54677, fill: "#111827" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_4840_5575" }, /* @__PURE__ */ React.createElement("rect", { width: 178, height: 22, fill: "white" }))));
const LogoLink = styled(Link)`
    display: inline-flex;
    align-items: center;
`;
const Logo = () => /* @__PURE__ */ jsx(LogoLink, { href: "/", children: /* @__PURE__ */ jsx(SvgLogo, {}) });
const LayoutWrapper$1 = styled(Layout)`
    background-color: var(--bg-color);
    min-height: 100vh;
`;
const LayoutContainer$1 = styled.div`
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
`;
const FooterContainer$1 = styled(LayoutContainer$1)`
    margin-top: auto;
`;
const Header$1 = styled.header`
    display: flex;
    justify-content: center;
    margin: 2rem auto;
`;
const GuestLayout = ({ children }) => {
  return /* @__PURE__ */ jsxs(LayoutWrapper$1, { children: [
    /* @__PURE__ */ jsx(LayoutContainer$1, { children: /* @__PURE__ */ jsx(Header$1, { children: /* @__PURE__ */ jsx(Logo, {}) }) }),
    /* @__PURE__ */ jsx(LayoutContainer$1, { children: /* @__PURE__ */ jsx(Divider, { style: { margin: 0 } }) }),
    /* @__PURE__ */ jsx(LayoutContainer$1, { children: /* @__PURE__ */ jsx(Layout.Content, { style: { margin: "4rem 10rem" }, children: /* @__PURE__ */ jsx("div", { className: "site-layout-content", children }) }) }),
    /* @__PURE__ */ jsxs(FooterContainer$1, { children: [
      /* @__PURE__ */ jsx(Divider, { style: { margin: 0 } }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const contextValue = {
    user,
    setUser
  };
  return /* @__PURE__ */ jsx(AuthContext.Provider, { value: contextValue, children });
}
const initState = {
  styles: getComputedStyle(document.body)
};
const RootContext = createContext(initState);
function RootProvider({ children }) {
  const root = useContext(RootContext);
  return /* @__PURE__ */ jsx(RootContext.Provider, { value: root, children: /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsx(
    ConfigProvider,
    {
      theme: {
        token: {
          colorPrimary: root.styles.getPropertyValue("--primary-color")
        }
      },
      children
    }
  ) }) });
}
const LoginForm = styled(Form)`
    max-width: 360px;
    margin: 4rem auto 0;
`;
const LoginFormForgot = styled("a")`
    float: right;
`;
const LoginFormButton = styled(Button)`
    width: 100%;
`;
const initialState$1 = {
  email: "",
  password: "",
  remember: false
};
function Login({ canResetPassword, status }) {
  const { data, setData, post, processing, errors, reset } = useForm(initialState$1);
  const onHandleInputChange = (e) => {
    setData(e.target.name, e.target.value);
  };
  const onHandleCheckboxChange = (e) => {
    setData(e.target.name, e.target.checked);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsx(RootProvider, { children: /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Typography.Title, { style: { textAlign: "center" }, children: "Sign In" }),
    /* @__PURE__ */ jsxs(
      LoginForm,
      {
        name: "normal_login",
        initialValues: {
          remember: true
        },
        autoComplete: "off",
        size: "large",
        onSubmit: formSubmit,
        children: [
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "email-label",
              rules: [
                {
                  required: true,
                  message: "Please input your Email!"
                }
              ],
              validateStatus: errors.email && "error",
              help: errors.email,
              children: /* @__PURE__ */ jsx(
                Input,
                {
                  name: "email",
                  type: "email",
                  placeholder: "Email",
                  prefix: /* @__PURE__ */ jsx(MailOutlined, { className: "site-form-item-icon" }),
                  onChange: onHandleInputChange
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "password",
              rules: [
                {
                  required: true,
                  message: "Please input your Password!"
                }
              ],
              validateStatus: errors.password && "error",
              help: errors.password,
              children: /* @__PURE__ */ jsx(
                Input.Password,
                {
                  prefix: /* @__PURE__ */ jsx(LockOutlined, { className: "site-form-item-icon" }),
                  type: "password",
                  name: "password",
                  placeholder: "Password",
                  onChange: onHandleInputChange
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "remember",
                valuePropName: "checked",
                noStyle: true,
                children: /* @__PURE__ */ jsx(
                  Checkbox$1,
                  {
                    name: "remember",
                    onChange: onHandleCheckboxChange,
                    children: "Remember me"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(LoginFormForgot, { href: "#!", children: "Forgot password" })
          ] }),
          /* @__PURE__ */ jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsx(
              LoginFormButton,
              {
                type: "primary",
                htmlType: "submit",
                disabled: processing,
                onClick: formSubmit,
                children: "Log in"
              }
            ),
            "Or ",
            /* @__PURE__ */ jsx(Link, { href: route("register"), children: "register now!" })
          ] })
        ]
      }
    )
  ] }) });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
function Register$1() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox" ? event.target.checked : event.target.value
    );
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "name", value: "Name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "mt-1 block w-full",
            autoComplete: "name",
            isFocused: true,
            handleChange: onHandleChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            handleChange: onHandleChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            handleChange: onHandleChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            forInput: "password_confirmation",
            value: "Confirm Password"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            handleChange: onHandleChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.password_confirmation,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Already registered?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", processing, children: "Register" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register$1
}, Symbol.toStringTag, { value: "Module" }));
const RegisterForm = styled(Form)`
    max-width: 360px;
    margin: 4rem auto 0;
`;
const RegisterFormButton = styled(Button)`
    width: 100%;
`;
const initialState = {
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
};
function Register() {
  const { data, setData, post, processing, errors } = useForm(initialState);
  const formSubmit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  const onHandleInputChange = (e) => {
    setData(e.target.name, e.target.value);
  };
  return /* @__PURE__ */ jsx(RootProvider, { children: /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Typography.Title, { style: { textAlign: "center" }, children: "Sign Up" }),
    /* @__PURE__ */ jsxs(
      RegisterForm,
      {
        name: "normal_register",
        initialValues: {
          remember: true
        },
        autoComplete: "off",
        size: "large",
        onSubmit: formSubmit,
        children: [
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "email-label",
              rules: [
                {
                  required: true,
                  message: "Please input your Email!"
                }
              ],
              validateStatus: errors.email && "error",
              help: errors.email,
              children: /* @__PURE__ */ jsx(
                Input,
                {
                  name: "email",
                  type: "email",
                  placeholder: "Email",
                  prefix: /* @__PURE__ */ jsx(MailOutlined, {}),
                  onChange: onHandleInputChange
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "name-label",
              rules: [
                {
                  required: true,
                  message: "Please input your Username!"
                }
              ],
              validateStatus: errors.email && "error",
              help: errors.email,
              children: /* @__PURE__ */ jsx(
                Input,
                {
                  name: "name",
                  type: "text",
                  placeholder: "Username",
                  prefix: /* @__PURE__ */ jsx(UserOutlined, {}),
                  onChange: onHandleInputChange
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "password-label",
              hasFeedback: true,
              rules: [
                {
                  required: true,
                  message: "Please input your Password!"
                }
              ],
              validateStatus: errors.password && "error",
              help: errors.password,
              children: /* @__PURE__ */ jsx(
                Input.Password,
                {
                  prefix: /* @__PURE__ */ jsx(LockOutlined, {}),
                  type: "password",
                  name: "password",
                  placeholder: "Password",
                  onChange: onHandleInputChange
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "confirm-password",
              dependencies: ["password-label"],
              hasFeedback: true,
              rules: [
                {
                  required: true,
                  message: "Please input your Password!"
                },
                ({ getFieldValue }) => ({
                  validator(_, currentValue) {
                    if (!currentValue || getFieldValue("password-label") === currentValue) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  }
                })
              ],
              children: /* @__PURE__ */ jsx(
                Input.Password,
                {
                  prefix: /* @__PURE__ */ jsx(LockOutlined, {}),
                  type: "password",
                  name: "password_confirmation",
                  placeholder: "Confirm Password",
                  onChange: onHandleInputChange
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsx(
              RegisterFormButton,
              {
                type: "primary",
                htmlType: "submit",
                disabled: processing,
                onClick: formSubmit,
                children: "Register"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              "Already have an account?",
              " ",
              /* @__PURE__ */ jsx(Link, { href: route("login"), children: "SIGN IN" })
            ] })
          ] })
        ]
      }
    )
  ] }) });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            handleChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            isFocused: true,
            handleChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            forInput: "password_confirmation",
            value: "Confirm Password"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            handleChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.password_confirmation,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", processing, children: "Reset Password" }) })
    ] })
  ] });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => setOpen(false)
      }
    )
  ] });
};
const Content = ({
  align = "right",
  width = "48",
  contentClasses = "py-1 bg-white",
  children
}) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses,
              children
            }
          )
        }
      )
    }
  ) });
};
const DropdownLink = ({ href, method, as, children }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      href,
      method,
      as,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function NavLink({ href, active, children }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      href,
      className: active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out",
      children
    }
  );
}
function ResponsiveNavLink({ method = "get", as = "a", href, active = false, children }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      method,
      as,
      href,
      className: `w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out`,
      children
    }
  );
}
function Authenticated({ auth, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxs("nav", { className: "bg-white border-b border-gray-100", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-9 w-auto fill-current text-gray-800" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex", children: /* @__PURE__ */ jsx(NavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ml-6", children: /* @__PURE__ */ jsx("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
          /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
              children: [
                auth.user.name,
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Log Out" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowingNavigationDropdown((previousState) => !previousState),
            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
            children: /* @__PURE__ */ jsxs("svg", { className: "h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "pt-2 pb-3 space-y-1", children: /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }) }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800", children: auth.user.name }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: auth.user.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route("logout"), as: "button", children: "Log Out" })
          ] })
        ] })
      ] })
    ] }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
function Dashboard(props) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      auth: props.auth,
      errors: props.errors,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900", children: "You're logged in!" }) }) }) })
      ]
    }
  );
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
function useAuth() {
  return useContext(AuthContext);
}
function HeaderNotAuth() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Button, { type: "link", children: /* @__PURE__ */ jsx(Link, { href: route("login"), children: "Войти" }) }),
    /* @__PURE__ */ jsx(Button, { type: "link", children: /* @__PURE__ */ jsx(Link, { href: route("register"), children: "Регистрация" }) })
  ] });
}
const Container = styled.div`
    display: flex;
    align-items: center;
`;
const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;
function HeaderIsAuth({ username }) {
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs(UserInfo, { children: [
      /* @__PURE__ */ jsx(Avatar, { size: "large", icon: /* @__PURE__ */ jsx(UserOutlined, {}) }),
      /* @__PURE__ */ jsx(Typography.Title, { level: 4, style: { margin: "0 1rem 0" }, children: username })
    ] }),
    /* @__PURE__ */ jsx(Button, { children: /* @__PURE__ */ jsx(Link, { href: route("logout"), method: "post", children: "Logout" }) })
  ] });
}
const HeaderContainer = styled(Layout.Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.header {
        background-color: transparent;
    }

    .header__menu {
        background-color: transparent;
        border-bottom: none;
    }
`;
const Header = () => {
  const { user } = useAuth();
  return /* @__PURE__ */ jsxs(HeaderContainer, { theme: "light", className: "header", children: [
    /* @__PURE__ */ jsx(Logo, {}),
    /* @__PURE__ */ jsx(
      Menu,
      {
        mode: "horizontal",
        items: [
          {
            key: "123",
            label: "Найти кандидата"
          },
          {
            key: "1234",
            label: "Попасть в базу"
          },
          {
            key: "12415",
            label: "О сервисе"
          },
          {
            key: "241616",
            label: "Портал"
          }
        ],
        className: "header__menu"
      }
    ),
    user ? /* @__PURE__ */ jsx(HeaderIsAuth, { username: user.name }) : /* @__PURE__ */ jsx(HeaderNotAuth, {})
  ] });
};
const LayoutWrapper = styled(Layout)`
    background-color: var(--bg-color);
    min-height: 100vh;
`;
const LayoutContainer = styled.div`
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
`;
const FooterContainer = styled(LayoutContainer)`
    margin-top: auto;
`;
const BreadcrumWrapper = styled(Breadcrumb)`
    margin: 20px 0;
`;
const MainLayout = ({ children, authUser }) => {
  const { user, setUser } = useAuth();
  useEffect(() => {
    setUser(authUser);
  }, [user]);
  return /* @__PURE__ */ jsxs(LayoutWrapper, { children: [
    /* @__PURE__ */ jsx(LayoutContainer, { children: /* @__PURE__ */ jsx(Header, {}) }),
    /* @__PURE__ */ jsx(LayoutContainer, { children: /* @__PURE__ */ jsx(Divider, { style: { margin: 0 } }) }),
    /* @__PURE__ */ jsx(LayoutContainer, { children: /* @__PURE__ */ jsxs(Layout.Content, { style: { minHeight: "100%" }, children: [
      /* @__PURE__ */ jsxs(BreadcrumWrapper, { children: [
        /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Home" }),
        /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "List" }),
        /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "App" })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "site-layout-content",
          style: { height: "100%" },
          children
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs(FooterContainer, { children: [
      /* @__PURE__ */ jsx(Divider, { style: { margin: 0 } }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
function IndexPage({ auth: { user } }) {
  const [componentSize, setComponentSize] = useState("large");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return /* @__PURE__ */ jsx(RootProvider, { children: /* @__PURE__ */ jsxs(MainLayout, { authUser: user, children: [
    /* @__PURE__ */ jsx(
      Card,
      {
        style: {
          marginTop: 16
        },
        children: /* @__PURE__ */ jsx(
          Card.Meta,
          {
            avatar: /* @__PURE__ */ jsx(Avatar, { src: "https://joesch.moe/api/v1/random" }),
            title: "Card title",
            description: "This is the description"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsxs(
      Form,
      {
        labelCol: {
          span: 4
        },
        wrapperCol: {
          span: 14
        },
        layout: "horizontal",
        initialValues: {
          size: componentSize
        },
        onValuesChange: onFormLayoutChange,
        size: componentSize,
        style: {
          maxWidth: 600
        },
        children: [
          /* @__PURE__ */ jsx(Form.Item, { label: "Form Size", name: "size", children: /* @__PURE__ */ jsxs(Radio.Group, { children: [
            /* @__PURE__ */ jsx(Radio.Button, { value: "small", children: "Small" }),
            /* @__PURE__ */ jsx(Radio.Button, { value: "default", children: "Default" }),
            /* @__PURE__ */ jsx(Radio.Button, { value: "large", children: "Large" })
          ] }) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "Input", children: /* @__PURE__ */ jsx(Input, {}) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "Select", children: /* @__PURE__ */ jsx(Select, { children: /* @__PURE__ */ jsx(Select.Option, { value: "demo", children: "Demo" }) }) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "TreeSelect", children: /* @__PURE__ */ jsx(
            TreeSelect,
            {
              treeData: [
                {
                  title: "Light",
                  value: "light",
                  children: [
                    {
                      title: "Bamboo",
                      value: "bamboo"
                    }
                  ]
                }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "Cascader", children: /* @__PURE__ */ jsx(
            Cascader,
            {
              options: [
                {
                  value: "zhejiang",
                  label: "Zhejiang",
                  children: [
                    {
                      value: "hangzhou",
                      label: "Hangzhou"
                    }
                  ]
                }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "DatePicker", children: /* @__PURE__ */ jsx(DatePicker, {}) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "InputNumber", children: /* @__PURE__ */ jsx(InputNumber, {}) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "Switch", valuePropName: "checked", children: /* @__PURE__ */ jsx(Switch, {}) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "Button", children: /* @__PURE__ */ jsx(Button, { children: "Button" }) })
        ]
      }
    )
  ] }) });
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IndexPage
}, Symbol.toStringTag, { value: "Module" }));
function DangerButton({ type = "submit", className = "", processing, children, onClick }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type,
      onClick,
      className: `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${processing && "opacity-25"} ` + className,
      disabled: processing,
      children
    }
  );
}
function Modal({ children, show = false, maxWidth = "2xl", closeable = true, onClose = () => {
} }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsx(Transition, { show, as: Fragment$1, leave: "duration-200", children: /* @__PURE__ */ jsxs(
    Dialog,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",
      onClose: close,
      children: [
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-500/75" })
          }
        ),
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ jsx(
              Dialog.Panel,
              {
                className: `mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`,
                children
              }
            )
          }
        )
      ]
    }
  ) });
}
function SecondaryButton({ type = "button", className = "", processing, children, onClick }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type,
      onClick,
      className: `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${processing && "opacity-25"} ` + className,
      disabled: processing,
      children
    }
  );
}
function DeleteUserForm({ className }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Delete Account" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
    ] }),
    /* @__PURE__ */ jsx(DangerButton, { onClick: confirmUserDeletion, children: "Delete Account" }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Are you sure you want to delete your account?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx(InputLabel, { for: "password", value: "Password", className: "sr-only" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            handleChange: (e) => setData("password", e.target.value),
            className: "mt-1 block w-3/4",
            isFocused: true,
            placeholder: "Password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx(DangerButton, { className: "ml-3", processing, children: "Delete Account" })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm({ className }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: () => {
        if (errors.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Update Password" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Ensure your account is using a long, random password to stay secure." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { for: "current_password", value: "Current Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            handleChange: (e) => setData("current_password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.current_password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { for: "password", value: "New Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            ref: passwordInput,
            value: data.password,
            handleChange: (e) => setData("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { for: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            value: data.password_confirmation,
            handleChange: (e) => setData("password_confirmation", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { processing, children: "Save" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enterFrom: "opacity-0",
            leaveTo: "opacity-0",
            className: "transition ease-in-out",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className
}) {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Profile Information" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Update your account's profile information and email address." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { for: "name", value: "Name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            className: "mt-1 block w-full",
            value: data.name,
            handleChange: (e) => setData("name", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "name"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { for: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            className: "mt-1 block w-full",
            value: data.email,
            handleChange: (e) => setData("email", e.target.value),
            required: true,
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800", children: [
          "Your email address is unverified.",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: "Click here to re-send the verification email."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600", children: "A new verification link has been sent to your email address." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { processing, children: "Save" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enterFrom: "opacity-0",
            leaveTo: "opacity-0",
            className: "transition ease-in-out",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation
}, Symbol.toStringTag, { value: "Module" }));
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
function Welcome(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome" }),
    /* @__PURE__ */ jsxs("div", { className: "relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white", children: [
      /* @__PURE__ */ jsx("div", { className: "sm:fixed sm:top-0 sm:right-0 p-6 text-right", children: props.auth.user ? /* @__PURE__ */ jsx(
        Link,
        {
          href: route("dashboard"),
          className: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
          children: "Dashboard"
        }
      ) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
            children: "Log in"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("register"),
            className: "ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
            children: "Register"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto p-6 lg:p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
          "svg",
          {
            viewBox: "0 0 62 65",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-16 w-auto bg-gray-100 dark:bg-gray-900",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z",
                fill: "#FF2D20"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "mt-16" }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center mt-16 px-6 sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://github.com/sponsors/taylorotwell",
              className: "group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
              children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    className: "-mt-px mr-1 w-5 h-5 stroke-gray-400 dark:stroke-gray-600 group-hover:stroke-gray-600 dark:group-hover:stroke-gray-400",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      }
                    )
                  }
                ),
                "Sponsor"
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0", children: [
            "Laravel v",
            props.laravelVersion,
            " (PHP v",
            props.phpVersion,
            ")"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            ` })
  ] });
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.jsx": __vite_glob_0_0, "./Pages/Auth/ForgotPassword.jsx": __vite_glob_0_1, "./Pages/Auth/Login(vendor).jsx": __vite_glob_0_2, "./Pages/Auth/Login.jsx": __vite_glob_0_3, "./Pages/Auth/Register(vendor).jsx": __vite_glob_0_4, "./Pages/Auth/Register.jsx": __vite_glob_0_5, "./Pages/Auth/ResetPassword.jsx": __vite_glob_0_6, "./Pages/Auth/VerifyEmail.jsx": __vite_glob_0_7, "./Pages/Dashboard.jsx": __vite_glob_0_8, "./Pages/IndexPage.jsx": __vite_glob_0_9, "./Pages/Profile/Edit.jsx": __vite_glob_0_10, "./Pages/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_11, "./Pages/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_12, "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_13, "./Pages/Welcome.jsx": __vite_glob_0_14 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
