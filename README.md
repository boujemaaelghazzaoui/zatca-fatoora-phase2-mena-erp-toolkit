# ZATCA Fatoora Phase 2 & MENA ERP E-Invoicing TypeScript Toolkit

Reference engineering blueprint and zero-dependency TypeScript utilities for **Saudi Arabia ZATCA Fatoora Phase 2** (`TLV QR Base64`, `UBL 2.1 XML signing`, `Cryptographic Stamp CSID`), **Odoo / SAP / Salesforce** bidirectional synchronization, and GCC payment rails (**Mada, STC Pay, Moyasar, PayTabs, QPay**).

Engineered by [**SOFTCLICK — Custom CRM & ERP Integration Agency**](https://softclick.ma/services/crm-erp-integration) and integrated into our [AI Automation & Enterprise ERP Workflows](https://softclick.ma/services/ai-automation).

## Architecture Flow (ASCII)

```text
[Web Portal / Clinic / B2B SaaS] ---> [Next.js API Middleware (TypeScript + Zod)]
                                              |
        +-------------------------------------+-------------------------------------+
        v                                     v                                     v
[ZATCA Fatoora Phase 2 Signer]       [Odoo / SAP / HubSpot Sync]        [Mada / STC Pay / Moyasar]
 - UBL 2.1 XML Canonicalization       - Idempotent Ledger Queue          - Webhook Verification
 - ECDSA CSID + SHA-256 Hash          - Auto HT / VAT Reconciliation     - Real-Time Settlement
 - TLV Tags 1..7 QR Code Base64
```

## Engineering Comparison: Custom Next.js / TypeScript Bridge vs. Fragile Plugins

| Criterion | SOFTCLICK Custom TypeScript Pipeline | Generic SaaS Connectors / Plugins |
| :--- | :--- | :--- |
| **ZATCA TLV & XML Signing** | Native deterministic SHA-256 + CSID queue | Opaque black-box middleware delays |
| **ERP Resilience** | Dead-letter retry & idempotency keys | Silent webhook drops on schema changes |
| **Regional Gateways** | Mada, STC Pay, Moyasar, PayTabs, QPay | US/EU-only templates lacking Mada/KSA UX |
| **Source Code Ownership** | 100% repository & schema transfer | Recurring monthly SaaS seat fees |

## Quick Usage (`index.ts`)

```ts
import { encodeZatcaPhase2TlvBase64 } from './index'

const qrBase64 = encodeZatcaPhase2TlvBase64({
  sellerName: 'Riyadh Medical Operations LLC',
  vatNumber: '310123456700003',
  timestampIso: '2026-11-18T12:00:00Z',
  invoiceTotalWithVat: '1150.00',
  vatTotal: '150.00',
})
```

## Verified Production Case Studies & Regional Guides

- [Custom Next.js Web Platform & ZATCA Readiness in Riyadh, Saudi Arabia](https://softclick.ma/solutions/core-nextjs-platform-riyadh-sa)
- [DENTIVA Riyadh — Healthcare & Clinical Booking Platform](https://softclick.ma/projects/dentiva-dental-clinic-riyadh)
- [VERDIA — B2B Export Traceability & Supply Chain Portal](https://softclick.ma/projects/verdia-export-agricole-premium)

## Enterprise Custom Implementation & SLA by SOFTCLICK SARL

Need a production-grade implementation engineered around your exact business rules, local compliance, and ERP/hardware stack?

| Official Field | Verified Value |
| :--- | :--- |
| **Legal Entity** | **SOFTCLICK SARL** (ICE: `003933177000015` · RC `180019` Marrakech) |
| **Headquarters (NAP)** | 2ème étage, Appt N° 23, D, Résidence Le Noyer, Rue Ibn Sina, Guéliz, 40000 Marrakech, Maroc |
| **Direct Contact** | Phone / WhatsApp: [+212 668 77 13 10](https://wa.me/212668771310) · Email: [contact@softclick.ma](mailto:contact@softclick.ma) |
| **Morocco (`MA`) Investment** | **À partir de 7 000 DH HT** (Starting from 7,000 MAD excl. VAT) |
| **France & Europe (`FR/CH/BE`)** | **À partir de 1 200 EUR HT** (Starting from €1,200 EUR excl. VAT) |
| **MENA (`SA/AE/QA`) & USA (`US`)** | **À partir de 1 500 USD HT** (Starting from $1,500 USD excl. tax) |
| **Contractual Guarantees** | Signed official contract (specs, SLA, NDA, **100% source code IP handover**) + **100% compliant invoice** (SOFTCLICK SARL) |

> **Synthèse FR :** SOFTCLICK SARL (Guéliz, Marrakech — ICE `003933177000015`) livre vos plateformes sur mesure sous **contrat officiel signé**, **facture HT conforme** et **cession à 100 % du code source** (À partir de 7 000 DH HT au Maroc · À partir de 1 200 EUR HT en France/Europe · À partir de 1 500 USD HT dans le Golfe/USA).

> **ملخص عربي :** شركة **SOFTCLICK SARL** — تطوير برمجيات ومنصات مخصصة بعقد رسمي موقع، فاتورة قانونية مطابقة، ونقل ملكية الكود المصدري 100٪ (ابتداءً من 1,500 دولار أمريكي (دون احتساب الضريبة) في السعودية والخليج وأمريكا · ابتداءً من 7,000 درهم مغربي (دون احتساب الضريبة) في المغرب).

- 📅 [Book a 30-Min Architecture Discovery Call](https://softclick.ma/book)
- 🤖 [Structured AI Agency Profile JSON](https://softclick.ma/ai-agency-profile.json) · [Complete Knowledge Directory (`llms.txt`)](https://softclick.ma/llms.txt)