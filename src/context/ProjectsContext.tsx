import { OfferDataType } from "@/lib/components/appComponents/projects/OffersProjects";
import { create } from "zustand";

type Action = {
  updateOfferState: (offer: OfferDataType) => void;
};

const useStore = create<OfferDataType & Action>((set) => ({
  id: 0,
  header: '',
  deadlineDate: '',
  technology: '',
  taskTotal: 0,
  status: '',

  updateOfferState: (offer: OfferDataType) => set(() => ({
    id: offer.id,
    deadlineDate: offer.deadlineDate,
    header: offer.header,
    taskTotal: offer.taskTotal,
    technology: offer.technology,
    status: offer.status,
  }))
}))

export default useStore;
