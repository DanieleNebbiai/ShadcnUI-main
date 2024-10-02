import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ActionsComponents } from "@/components/ComponentsPreview/ActionsComponents";
import { FeedbackComponents } from "@/components/ComponentsPreview/FeedbackComponents";
import { LayoutComponents } from "@/components/ComponentsPreview/LayoutComponents";
import { NavigationComponents } from "@/components/ComponentsPreview/NavigationComponents";
import { DataDisplayComponents } from "@/components/ComponentsPreview/DataDisplayComponents";
import { DataInputComponents } from "@/components/ComponentsPreview/DataInputComponents";
import { GettingStarted } from "@/components/ComponentsPreview/GettingStarted";

export function ComponentsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("actions");

  return (
    <section className="container mx-auto px-4 py-4 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-1 items-center">
        <div className="flex ">
          <Sidebar
            onCategoryClick={(category) => {
              setSelectedCategory(category);
              navigate(`/Components/${category}`);
            }}
            selectedCategory={selectedCategory}
          />
          <div className="flex-1 max-w-3xl ml-64">
            <Routes>
              <Route path="getting-started" element={<GettingStarted />} />
              <Route path="actions" element={<ActionsComponents />} />
              <Route path="feedback" element={<FeedbackComponents />} />
              <Route path="layout" element={<LayoutComponents />} />
              <Route path="navigation" element={<NavigationComponents />} />
              <Route path="data-display" element={<DataDisplayComponents />} />
              <Route path="data-input" element={<DataInputComponents />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}
