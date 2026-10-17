"use client";
import { useRouter } from "next/navigation";
import { UsersRound, ChartLine } from 'lucide-react';

import Link from "next/link"

export default function Dashboard() {
    const router = useRouter();

    return (
        <div>

            <aside className="bg-blue-950 w-1/8 h-screen flex flex-col p-2 gap-1.5">
                <div className="flex flex-row gap-2 p-3 items-center mb-6 ">
                    <div className="bg-blue-800 w-8 h-8 flex items-center justify-center rounded-sm p-1 ">
                        <p className="text-gray-200 font-extrabold text-xs">CP</p>
                    </div>
                    <p className="text-gray-200 font-bold">CadastroWeb</p>

                </div>
                <nav className="flex flex-col gap-6 ml-3">
                    <Link href="/dashboard/visaoGeral" className="text-gray-500 bg-blue-950 hover:text-gray-200 font-bold flex flex-row gap-2 ">
                        <ChartLine size={18} strokeWidth={1.5} />
                        Visão Geral
                    </Link>

                    <Link href="/dashboard/pessoas" className=" text-gray-500 bg-blue-950 hover:text-gray-200 font-bold flex flex-row gap-2">
                        <UsersRound size={18} strokeWidth={1.5}></UsersRound>
                        Pessoas
                    </Link>

                </nav>

            </aside>
        </div>);
}
