# Developer Guide: Exodomus Chronicles: Lumina Perdida

Welcome to the development guide for **Exodomus Chronicles: Lumina Perdida**, a narrative-driven Web3 experience that blends interactive storytelling, NFT mechanics, and a cyberpunk world inspired by Latin American culture. This guide covers how the project is structured, how to get started, and how to contribute meaningfully to the codebase.

---

## 🚀 Project Overview

Exodomus Chronicles is a modular Web3 project with six primary components:

- `frontend/` – The user-facing decentralized application (DApp), built with **Next.js** and **Tailwind CSS**, where users interact with the story, connect wallets, and reveal NFT memories.
- `smart-contracts/` – Smart contracts on **Solana**, written using **Anchor** or raw **Rust**, to handle story progression, NFT logic, memory fusion, and on-chain validation.
- `backend/` – (Optional) APIs and webhooks for off-chain services like story logic, memory puzzles, and metadata management. Built with **Node.js** or **Express**.
- `narrative/` – Contains episodic content, broken into NFT memories, puzzle pieces, and story arcs. These are written in Markdown and later converted to on-chain metadata.
- `deployment/` – Deployment scripts and configuration for **Vercel**, **Pinata**, and IPFS hosting.
- `docs/` – All technical documentation, developer guides, and references.

---

## 🧰 Tech Stack

| Layer         | Technology              |
|---------------|--------------------------|
| Blockchain    | Solana (Anchor / Rust)  |
| Frontend      | Next.js + Tailwind CSS  |
| Backend       | Node.js / Express       |
| NFT Metadata  | JSON / Arweave / IPFS   |
| NFT Storage   | IPFS via Pinata         |
| Deployment    | Vercel, GitHub Pages    |
| Wallet        | Phantom, Solflare       |

---

## 📦 Folder Structure

```bash
Exodomus-Chronicles/
├── frontend/              # DApp interface
│   ├── components/        # Reusable UI elements
│   └── pages/             # Routes (e.g. /mint, /episode/1)
├── smart-contracts/       # Anchor or Rust-based Solana programs
│   └── src/               # Smart contract logic
├── backend/               # Off-chain APIs (optional)
├── narrative/             # Structured story and puzzle pieces
├── deployment/            # CI/CD configs and deploy scripts
├── docs/                  # Developer + contributor docs
├── README.md              # Project summary
└── CONTRIBUTING.md        # Contribution guidelines
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository

If using GitHub Web:
- Fork the repository to your profile
- Click `<> Code` > `Download ZIP` or open it with GitHub Desktop

### 2. Set Up the Frontend

```bash
cd frontend
npm install
npm run dev
```
> Opens on: http://localhost:3000

### 3. Compile Smart Contracts (Anchor)

Make sure Rust, Solana CLI, and Anchor are installed:
```bash
cd smart-contracts
anchor build
```

Run tests:
```bash
anchor test
```

### 4. Story & Metadata Setup

- Edit episodes and memory fragments inside `/narrative/episodes/`
- Use Markdown or JSON for metadata that links to IPFS hashes

### 5. Deployment

Frontend is hosted via Vercel. You can connect your GitHub repo and enable auto-deployments.

---

## 🔁 Workflow Summary

| Task                         | Tool / Folder           |
|------------------------------|--------------------------|
| Build UI                    | `/frontend`              |
| Develop Smart Contracts     | `/smart-contracts`       |
| Add Story Content           | `/narrative`             |
| Host DApp                   | `/deployment/vercel.json`|
| Test Locally                | Anchor + `npm run dev`   |

---

## 🧠 Developer Tips

- Use a consistent commit style: `feat:`, `fix:`, `refactor:`
- Validate JSON and Markdown metadata before pushing
- Keep logic modular in smart contracts; memory logic should be decoupled
- Use Solana devnet for local tests
- Tag complex features with `// TODO:` and explain intent

---

## 💬 Need Help?

- Join our Discord (coming soon)
- Open a GitHub issue with the `question` label
- Tag maintainers in pull request reviews

Happy building — and remember: **Every memory holds a secret.**

