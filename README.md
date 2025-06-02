# Vikify

**Vikify** is a privacy-first subscription platform built on Avalanche using the **eERC20** token standard. It empowers users to pay for digital content like newsletters, communities, and exclusive memberships — **anonymously and securely**, without revealing their identity or payment history.

---

## 🔐 What It Does

Vikify enables **anonymous, recurring payments** for digital subscriptions, ensuring **on-chain privacy** for both creators and subscribers. With eERC20's **PrivateTransfer** mechanism, payments are encrypted, subscription status is protected, and personal data is never exposed.

---

## ✨ Features

- **🕵️ Private Monthly Payments**  
  Use eERC20’s PrivateTransfer on Avalanche Fuji to keep all transaction details encrypted on-chain.

- **📅 Subscription Status Tracking**  
  Manage and verify your subscription status using off-chain checks or zero-knowledge proofs — **no user data exposed**.

- **🛡️ Creator Privacy**  
  Creators only see that a payment was made, **not who made it** — ensuring mutual anonymity.

- **📜 Anonymous Receipts**  
  Users receive encrypted, private receipts that only they can decrypt and verify.

---

## 💡 Why Vikify?

> _“Think of Vikify as **Patreon with end-to-end privacy**.”_

Vikify is ideal for:
- **Privacy-conscious communities**
- Creators who need **financial privacy for their supporters**
- **Investigative journalists**
- **Whistleblowers** & activists

It bridges a critical gap: **private patronage** on public blockchains.

---

## ⚙️ Tech Stack

| Layer       | Technology                      |
|-------------|----------------------------------|
| Blockchain  | Avalanche Fuji Testnet (eERC20) |
| Frontend    | React.js                        |
| Backend     | Node.js                         |
| Wallets     | MetaMask, WalletConnect         |
| Crypto      | Elliptic Curve Crypto, ZK Proofs|

---

## 🚀 Getting Started

Clone and run Vikify locally:

```bash
git clone https://github.com/Fatumayattani/vikify.git
cd vikify
npm install
npm run dev
````

Make sure MetaMask is connected to **Avalanche Fuji Testnet** with test AVAX and eERC20 tokens.

---

## 📈 Business Model

Vikify earns revenue via:

* **Platform Fee (1-3%)** on subscription transactions — customizable per tier.
* **Premium Creator Plans** for advanced tools, analytics, and branding.
* **Optional Privacy Add-ons**, like encrypted message delivery and anonymous polls.
* **Enterprise API Licensing** for privacy-focused organizations and DAOs.

All revenue is transparent and routed through a **public treasury**, with governance potentially handed to the community via DAO.

---

## 🛣 Roadmap

| Phase      | Milestone                                 |
| ---------- | ----------------------------------------- |
| ✅ Q2 2025  | MVP with private payments on Fuji         |
| ✅ Q2 2025  | Creator dashboard & subscription logic    |
| 🔄 Q3 2025 | ZK-proof-based subscription verifications |
| 🔄 Q3 2025 | Launch on Avalanche Mainnet               |
| 🔜 Q4 2025 | Governance via PrivacyDAO                 |
| 🔜 Q1 2026 | Mobile DApp & encrypted message board     |

---

## 🔬 How It Works (Simplified)

1. **User initiates a subscription**
2. Funds are sent using `PrivateTransfer()` (eERC20)
3. Receipt is encrypted and saved client-side
4. Creator receives confirmation without identity linkage
5. Subscription status is validated off-chain or through a ZK circuit

---

## 🧪 Testing on Avalanche Fuji

* **Explorer**: [Avalanche Fuji Explorer](https://subnets.avax.network/fuji)
* **Faucet**: [https://faucet.avax.network](https://faucet.avax.network)
* Make sure to **add the Fuji C-Chain** to MetaMask:

  * RPC: `https://api.avax-test.network/ext/bc/C/rpc`
  * Chain ID: `43113`
  * Symbol: `AVAX`

---

## 🧠 Future Vision

Vikify will become a **universal privacy layer** for all content monetization platforms — starting with subscriptions and expanding into:

* Anonymous donations
* Private tipping widgets
* Decentralized paywalls
* Creator reputation without identity

---

## 👨‍💻 Contributing

We welcome contributions! Open issues, submit pull requests, or suggest improvements.

---

## 📄 License

MIT License. See `LICENSE` file for details.

---

## 🔗 Useful Links

* [eERC20 Standard Overview](https://docs.avax.network/)
* [Avalanche Fuji Explorer](https://subnets.avax.network/fuji)
* [Avalanche Faucet](https://faucet.avax.network)
* [Vikify GitHub](https://github.com/Fatumayattani/vikify)

---

**Built with ❤️ for a more private future.**
