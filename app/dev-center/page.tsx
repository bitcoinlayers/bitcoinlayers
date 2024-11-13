import Image from "next/image";

export default function DevCenterPage() {
    return (
        <div className="flex justify-center items-center my-20">
            <Image
                src="/dev_center.png"
                alt="Dev Center"
                width={500}
                height={500}
            />
        </div>
    );
}
