# 💈 FSW Barber - Sistema Completo de Gestão e Agendamento.

![Next Js](https://img.shields.io/badge/NextJs-000000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![postgresql](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-039BE5?style=for-the-badge&logo=stripe&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)

> Sistema Completo de Gestão e Agendamento: Uma solução Full-stack para barbearias, focada em conveniência para o cliente e organização para o profissional

---

## 💻 Sobre o Projeto

O FSW Barber é uma plataforma desenvolvida para modernizar o processo de agendamento em barbearias. O sistema permite que o usuário encontre barbearias próximas, visualize serviços disponíveis e reserve horários em tempo real, com a segurança de um fluxo de autenticação via Google e checkout integrado.

### 🛡️ Destaques Técnicos

Arquitetura de Banco de Dados Relacional
Utilizei o Prisma ORM com Neon DB para gerenciar relacionamentos complexos entre Usuários, Barbearias, Serviços e Agendamentos. A integridade dos dados é garantida através de esquemas rigorosos, impedindo reservas duplicadas para o mesmo horário.

Server-Side Rendering & Autenticação
O projeto utiliza Server Components para garantir que a dashboard carregue instantaneamente, enquanto as Server Actions lidam com a lógica de agendamento e cancelamento de forma segura, validando a sessão do usuário em cada etapa.

### ✨ Funcionalidades Principais

- **Autenticação Social:** - Login rápido e seguro utilizando contas Google via NextAuth.
- **Exploração de Barbearias:** - Dashboard inicial com listagem dinâmica de barbearias e seus respectivos catálogos de serviços.
- **Agendamento Inteligente:** - Sistema de reserva com seleção de data e horários disponíveis, evitando conflitos de agenda.
- **Gestão de Reservas:** - Área exclusiva para o usuário visualizar seus agendamentos futuros e histórico.
- **Cancelamento Flexível** - Opção de cancelamento de reservas diretamente pelo painel do usuário.
- **Geolocalização & Contato:** - Informações detalhadas da localização da barbearia e integração com mapas.
- **Checkout Integrado:** - Pagamento de serviços via Stripe, garantindo uma transação fluida e profissional.

### 📊 Arquitetura e Estado Global

- **Custom Hooks:** Abstração de lógicas complexas para componentes reutilizáveis e código mais limpo.

### 🎨 UI/UX Responsiva (Mobile-First)

- Interface construída com Tailwind CSS, garantindo que a experiência de compra seja idêntica e fluida tanto em dispositivos móveis quanto em desktops.

---

## 🛠 Tecnologias Utilizadas

- **[NextJs](https://nextjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática.
- **[Postgresql](https://www.postgresql.org/docs/)** - Database.
- **[Stripe](https://docs.stripe.com/)** - Gateway de pagamento.
- **[Tailwind](https://tailwindcss.com/)** - Estilização.
- **[Zod](https://zod.dev/)** - Validação de Schemas.

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (v18 ou superior).

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/JudsonCiribelli/fsw-barber.git
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente:**
   **Crie um arquivo .env.local na raiz e adicione suas credenciais do Stripe**
   ```Snippet de código
   DATABASE_URL=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   NEXTAUTH_SECRET=
   STRIPE_SECRET_KEY=
   ```
4. **Rode o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

- Desenvolvido por Judson Rodrigues Ciribelli Filho 🚀

---
