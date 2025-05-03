import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote>
            <p className="text-lg font-medium sm:text-xl md:text-3xl">
              Working with Sai&nbsp;d and Nasser was very rewarding to me as the CEO
              of Nvidia. They are very professional and they know what they are
              doing. I would recommend them to anyone looking for a reliable and
              efficient team.
            </p>

            <div className="mt-12 flex items-center justify-center gap-6">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://tailus.io/images/reviews/shekinah.webp"
                  alt="Shekinah Tshiokufila"
                  height="400"
                  width="400"
                  loading="lazy"
                />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>

              <div className="space-y-1 border-l pl-6">
                <cite className="font-medium">John Doe</cite>
                <span className="text-muted-foreground block text-sm">
                  CEO, Nvidia
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
