import type { ReactNode } from "react";

type SectionProps = {
  label: ReactNode;
  children?: ReactNode;
};

type BulletGroupProps = {
  label?: ReactNode;
  children: ReactNode;
};

type ChangeProps = {
  before: ReactNode;
  after: ReactNode;
};

type AddedProps = {
  children: ReactNode;
};

const beforeStyle = {
  color: "#15803d",
};

const afterStyle = {
  color: "#dc2626",
};

const labelStyle = {
  fontWeight: 600,
};

export default function Section({
  label,
  children,
}: SectionProps) {
  return (
    <li>
      {label}

      {children ? (
        <ol className="nested">
          {children}
        </ol>
      ) : null}
    </li>
  );
}

export function BulletGroup({
  label,
  children,
}: BulletGroupProps) {
  return (
    <li className="bullet-group">
      {label ? (
        <div className="bullet-label">
          {label}
        </div>
      ) : null}

      <ul className="bullet-list">
        {children}
      </ul>
    </li>
  );
}

export function ChangeItem({
  before,
  after,
}: ChangeProps) {
  return (
    <li>
      <div style={beforeStyle}>
        <span style={labelStyle}>Before: </span>
        {before}
      </div>

      <div style={afterStyle}>
        <span style={labelStyle}>Updated: </span>
        {after}
      </div>
    </li>
  );
}

export function ChangeBullet({
  before,
  after,
}: ChangeProps) {
  return (
    <li>
      <div style={beforeStyle}>
        <span style={labelStyle}>Before: </span>
        {before}
      </div>

      <div style={afterStyle}>
        <span style={labelStyle}>Updated: </span>
        {after}
      </div>
    </li>
  );
}

export function AddedItem({
  children,
}: AddedProps) {
  return (
    <li>
      <div style={beforeStyle}>
        <span style={labelStyle}>Before: </span>
        Not documented in the previous flow.
      </div>

      <div style={afterStyle}>
        <span style={labelStyle}>Added: </span>
        {children}
      </div>
    </li>
  );
}

export function AddedBullet({
  children,
}: AddedProps) {
  return (
    <li style={afterStyle}>
      <span style={labelStyle}>Added: </span>
      {children}
    </li>
  );
}