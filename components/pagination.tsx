"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import AngleLeftIcon from "@/components/icons/AngleLeftIcon";
import AngleRightIcon from "@/components/icons/AngleRightIcon";
import { useRouter } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 36;
  const router = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <div className="flex justify-center">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
        <div className="flex -space-x-px">
          <input
            type="number"
            className="border border-gray-400 rounded-md px-4 w-[120px] focus:outline-amber-500"
            placeholder="1"
            min={1}
            max={10000}
            onChange={(event) => {
              router.push(createPageURL(event.target.value));
            }}
            value={currentPage}
          />
        </div>
        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center rounded-md border",
    {
      "pointer-events-none text-gray-300": isDisabled,
      "hover:bg-gray-100": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    },
  );

  const icon =
    direction === "left" ? (
      <AngleLeftIcon width="24px" height="24px" />
    ) : (
      <AngleRightIcon width="24px" height="24px" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
