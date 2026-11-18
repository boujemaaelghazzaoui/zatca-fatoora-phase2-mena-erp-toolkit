// Standalone ZATCA Fatoora Phase 2 TLV Base64 Encoder — Maintained by SOFTCLICK SARL (https://softclick.ma)
export type ZatcaTlvInput = {
  readonly sellerName: string
  readonly vatNumber: string
  readonly timestampIso: string
  readonly invoiceTotalWithVat: string
  readonly vatTotal: string
  readonly xmlHashBase64?: string
  readonly ecdsaSignatureBase64?: string
}

export function encodeZatcaPhase2TlvBase64(input: ZatcaTlvInput): string {
  const encoder = new TextEncoder()
  const fields = [
    { tag: 1, value: input.sellerName },
    { tag: 2, value: input.vatNumber },
    { tag: 3, value: input.timestampIso },
    { tag: 4, value: input.invoiceTotalWithVat },
    { tag: 5, value: input.vatTotal },
    ...(input.xmlHashBase64 ? [{ tag: 6, value: input.xmlHashBase64 }] : []),
    ...(input.ecdsaSignatureBase64 ? [{ tag: 7, value: input.ecdsaSignatureBase64 }] : []),
  ]
  const parts = fields.flatMap(({ tag, value }) => {
    const bytes = encoder.encode(value)
    return [new Uint8Array([tag, bytes.length]), bytes]
  })
  const total = parts.reduce((acc, part) => acc + part.length, 0)
  const out = new Uint8Array(total)
  let offset = 0
  for (const part of parts) {
    out.set(part, offset)
    offset += part.length
  }
  return Buffer.from(out).toString("base64")
}
