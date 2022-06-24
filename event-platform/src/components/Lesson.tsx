import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

import ClassNames from "classnames";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
    const params = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(availableAt);
    const availableDateFormatted = format(availableAt, "EEEE' . 'd' de 'MMMM' . 'k'h'mm", {
        locale: ptBR,
    });   
    
    const isActiveLesson = params.slug === slug;

    return (
        <Link to={`/event/lesson/${slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            
            <div className={ClassNames("rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500", {
                "bg-green-500": isActiveLesson,
            })}
            >
                <header className="flex items-center justify-between">
                   {
                    isLessonAvailable ? (
                        <span className={ClassNames("text-sm font-medium flex items-center gap-2", {
                            "text-white": isActiveLesson,
                            "text-blue-500": !isActiveLesson,
                        })}>
                            <CheckCircle size={20} />
                            Conteúdo Liberado                        
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em Breve                       
                        </span>
                    )
                   }
                    <span className={ClassNames("text-xs rounded py-[0.125rem] px-2 text-white border font-bold", {
                        "border-white": isActiveLesson,
                        "border-green-300": !isActiveLesson,
                    })}>
                        {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
                    </span>
                </header>

                <strong className={ClassNames("mt-5 block", {
                    "text-white": isActiveLesson,
                    "text-gray-200": !isActiveLesson,
                })}>
                    {title}
                </strong>
            </div>
        </Link>
    )
}