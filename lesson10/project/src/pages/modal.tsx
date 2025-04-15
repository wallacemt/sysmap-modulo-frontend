import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import mapImage from "@/assets/images/map.jpg";

function Modal() {
  return (
    <div className="py-40 flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Criar atividade</Button>
        </DialogTrigger>

        <DialogContent className="max-w-3xl gap-y-10">
          <DialogTitle className="font-heading text-2xl">
            Nova atividade
          </DialogTitle>

          <form className="grid justify-items-end gap-10">
            <div className="flex gap-x-12">
              <div className="space-y-4 flex-1">
                <div className="space-y-1.5">
                  <Label>Imagem</Label>
                  <Input className="h-32" type="file" />
                </div>

                <div className="space-y-1.5">
                  <Label>Título</Label>
                  <Input />
                </div>

                <div className="space-y-1.5">
                  <Label>Descrição</Label>
                  <Textarea className="h-32" />
                </div>

                <div className="space-y-1.5">
                  <Label>Data</Label>
                  <Input type="date" />
                </div>
              </div>

              <div className="space-y-4 flex flex-col justify-between flex-1">
                <div className="space-y-1.5">
                  <Label>Tipo</Label>

                  <div className="overflow-auto max-w-80 flex gap-x-2">
                    <div>
                      <div className="w-20 h-20 border rounded-full"></div>
                      <span>Corrida</span>
                    </div>

                    <div>
                      <div className="w-20 h-20 border rounded-full"></div>
                      <span>Corrida</span>
                    </div>
                    <div>
                      <div className="w-20 h-20 border rounded-full"></div>
                      <span>Corrida</span>
                    </div>
                    <div>
                      <div className="w-20 h-20 border rounded-full"></div>
                      <span>Corrida</span>
                    </div>
                    <div>
                      <div className="w-20 h-20 border rounded-full"></div>
                      <span>Corrida</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 5">
                  <Label>Local</Label>
                  <img src={mapImage} />
                </div>

                <div className="space-y-1 5">
                  <Label>Requer aprovação para participar</Label>
                  <Input type="checkbox" />
                </div>
              </div>
            </div>

            <Button className="w-56" size="lg">
              Criar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { Modal };
