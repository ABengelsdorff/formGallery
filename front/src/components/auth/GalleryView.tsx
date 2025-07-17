"use client"

import { useState, useEffect, useCallback } from "react"
import LoginForm1 from "../login/loginForm1"
import LoginForm2 from "../login/loginForm2"
import { LoginForm3 } from "../login/loginForm3"
import { LoginForm4 } from "../login/loginForm4"
import { LoginForm5 } from "../login/loginForm5"
import LoginForm6 from "../login/loginForm6"
import LoginForm7 from "../login/loginForm7"
import LoginForm8 from "../login/loginForm8"
import LoginForm9 from "../login/loginForm9"
import LoginForm10 from "../login/loginForm10"
import LoginForm11 from "../login/loginForm11"
import LoginForm12 from "../login/loginForm12"
import RegisterForm1 from "../register/registerForm1"
import RegisterForm2 from "../register/registerForm2"
import RegisterForm3 from "../register/registerForm3"
import RegisterForm4 from "../register/registerForm4"
import RegisterForm5 from "../register/registerForm5"
import RegisterForm6 from "../register/registerForm6"
import RegisterForm7 from "../register/registerForm7"
import RegisterForm8 from "../register/registerForm8"
import RegisterForm9 from "../register/registerForm9"
import RegisterForm10 from "../register/registerForm10"
import RegisterForm11 from "../register/registerForm11"
import RegisterForm12 from "../register/registerForm12"
import { motion } from "framer-motion"

// Tipos TypeScript
type TabType = "login" | "register"

interface FormConfig {
  component: React.ReactElement
  title: string
}

// Configuración de formularios con metadatos
const FORM_CONFIGS: Record<TabType, FormConfig[]> = {
  login: [
    { component: <LoginForm1 key="login1" />, title: "Login 1" },
    { component: <LoginForm2 key="login2" />, title: "Login 2" },
    { component: <LoginForm3 key="login3" />, title: "Login 3" },
    { component: <LoginForm4 key="login4" />, title: "Login 4" },
    { component: <LoginForm5 key="login5" />, title: "Login 5" },
    { component: <LoginForm6 key="login6" />, title: "Login 6" },
    { component: <LoginForm7 key="login7" />, title: "Login 7" },
    { component: <LoginForm8 key="login8" />, title: "Login 8" },
    { component: <LoginForm9 key="login9" />, title: "Login 9" },
    { component: <LoginForm10 key="login10" />, title: "Login 10" },
    { component: <LoginForm11 key="login11" />, title: "Login 11" },
    { component: <LoginForm12 key="login12" />, title: "Login 12" },
  ],
  register: [
    { component: <RegisterForm1 key="register1" />, title: "Registro 1" },
    { component: <RegisterForm2 key="register2" />, title: "Registro 2" },
    { component: <RegisterForm3 key="register3" />, title: "Registro 3" },
    { component: <RegisterForm4 key="register4" />, title: "Registro 4" },
    { component: <RegisterForm5 key="register5" />, title: "Registro 5" },
    { component: <RegisterForm6 key="register6" />, title: "Registro 6" },
    { component: <RegisterForm7 key="register7" />, title: "Registro 7" },
    { component: <RegisterForm8 key="register8" />, title: "Registro 8" },
    { component: <RegisterForm9 key="register9" />, title: "Registro 9" },
    { component: <RegisterForm10 key="register10" />, title: "Registro 10" },
    { component: <RegisterForm11 key="register11" />, title: "Registro 11" },
    { component: <RegisterForm12 key="register12" />, title: "Registro 12" },
  ]
}

export default function GalleryView() {
  const [activeTab, setActiveTab] = useState<TabType>("login")



  // Manejadores optimizados con useCallback
  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab)
  }, [])

  // Event listeners optimizados
  useEffect(() => {
    const handleRegister = () => handleTabChange("register")
    const handleLogin = () => handleTabChange("login")

    if (typeof window !== 'undefined') {
      window.addEventListener('switchToRegister', handleRegister)
      window.addEventListener('switchToLogin', handleLogin)
      
      return () => {
        window.removeEventListener('switchToRegister', handleRegister)
        window.removeEventListener('switchToLogin', handleLogin)
      }
    }
  }, [handleTabChange])

  const polaroidStyles = [
    "rotate-[-10deg] -translate-x-12 -translate-y-2 z-10",
    "rotate-[8deg] translate-x-10 -translate-y-4 z-20",
    "rotate-[-4deg] -translate-x-4 translate-y-2 z-30",
    "rotate-[6deg] translate-x-6 translate-y-4 z-40",
    "rotate-[-7deg] -translate-x-8 translate-y-6 z-50",
    "rotate-[12deg] translate-x-12 translate-y-8 z-60",
    "rotate-[-14deg] -translate-x-14 translate-y-10 z-70",
    "rotate-[3deg] translate-x-3 -translate-y-3 z-80",
    "rotate-[-6deg] -translate-x-6 translate-y-5 z-90",
    "rotate-[9deg] translate-x-9 -translate-y-6 z-100",
    "rotate-[-12deg] -translate-x-12 translate-y-7 z-110",
    "rotate-[5deg] translate-x-5 -translate-y-8 z-120",
  ];

  return (
    <div className="bg-transparent text-white">
      <header className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-500 drop-shadow-xl">
          Galería de Formularios
        </h1>
        <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
          Explora diseños modernos y reutilizables para login y registro con React + Tailwind.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-zinc-800/40 border border-zinc-700/60 rounded-full flex p-1 gap-1">
          {(["login", "register"] as const).map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 text-sm md:text-base font-medium rounded-full transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-md"
                  : "text-zinc-400 hover:text-yellow-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "login" ? "Login" : "Registro"}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      {activeTab === "login" ? (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden flex items-center justify-center z-10">
          {FORM_CONFIGS.login.map((formConfig, index) => (
            <motion.div
              key={index}
              drag
              dragElastic={0.8}
              whileTap={{ scale: 1.05, zIndex: 999 }}
              className={`absolute left-1/2 top-40 w-[400px] max-w-full -translate-x-1/2 cursor-pointer select-none transition-transform duration-300 ${polaroidStyles[index % polaroidStyles.length]}`}
              style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
            >
              <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm relative">
                <div className="absolute top-4 right-4">
                  <span className="text-xs px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-semibold shadow">
                    Login
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-yellow-400 transition">
                  {formConfig.title}
                </h3>
                <div className="min-h-[260px] flex items-center justify-center">
                  {formConfig.component}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {FORM_CONFIGS.register.map((formConfig, index) => (
            <div
              key={index}
              className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 shadow-lg backdrop-blur-sm relative"
            >
              <div className="absolute top-4 right-4">
                <span className="text-xs px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-semibold shadow">
                  Registro
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-yellow-400 transition">
                {formConfig.title}
              </h3>
              <div className="min-h-[400px] flex items-center justify-center">
                {formConfig.component}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Simulated Credentials 
      <section className="mt-16 max-w-md mx-auto bg-zinc-900/30 rounded-xl border border-zinc-700/40 p-4 text-center text-zinc-300 shadow">
        <h4 className="text-amber-400 font-semibold mb-2">🔐 Credenciales de prueba</h4>
        <p className="text-sm">Email: <span className="text-white">admin@gmail.com</span></p>
        <p className="text-sm">Contraseña: <span className="text-white">admin123</span></p>
        <p className="text-xs text-zinc-500 mt-2 italic">* Solo para demostración visual</p>
      </section> */}

      <footer className="mt-12 text-center text-zinc-500 text-sm">
        <p>
          Bengelsdorff Angélica • Hecho con ❤️ en Next.js + TailwindCSS
        </p>
      </footer>
    </div>
  )
} 