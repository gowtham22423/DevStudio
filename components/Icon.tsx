"use client";

import {
  PenNib,
  Code,
  Target,
  ShoppingBag,
  ArrowsClockwise,
  ShieldCheck,
  Compass,
  Gauge,
  MagnifyingGlass,
  Handshake,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  Plus,
  Check,
  CaretDown,
  List,
  X,
  Quotes,
  At,
  Phone,
  MapPin,
  GithubLogo,
  LinkedinLogo,
  XLogo,
  InstagramLogo,
  Lightning,
  type IconProps,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";

// One icon family, one place to map content keys to glyphs.
const MAP: Record<string, PhosphorIcon> = {
  PenNib,
  Code,
  Target,
  ShoppingBag,
  ArrowsClockwise,
  ShieldCheck,
  Compass,
  Gauge,
  MagnifyingGlass,
  Handshake,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  Plus,
  Check,
  CaretDown,
  List,
  X,
  Quotes,
  At,
  Phone,
  MapPin,
  GithubLogo,
  LinkedinLogo,
  XLogo,
  InstagramLogo,
  Lightning,
};

export type IconName = keyof typeof MAP;

export default function Icon({
  name,
  weight = "regular",
  ...props
}: { name: string } & IconProps) {
  const Glyph = MAP[name] ?? Lightning;
  return <Glyph weight={weight} {...props} />;
}
