function triggerExample(){
    const text = `Introduction
    Thus, in the present study, we set out (i) to characterize the lymphoid cells found in the myocardium and heart-draining lymph nodes of healthy (unimmunized/uninfected) mice at different ages and (ii) to investigate in which ways the activity of such lymphocytes could influence the myocardial aging process.
    
    Discussion
    In the present study, we observed that a smallpopulation of B and T lymphocytes can also be consistentlyfound in the myocardial parenchyma of healthy mice.Although lymphocytes are best characterized in the blood,lymphatic fluid, and lymphoid organs, interest in tissue-residentlymphocytes is currently emerging (33–37). Different lymphocytepopulations have now been described in several nonlymphoidorgans, where they can influence the local molecular milieu andmodulate other resident cells (38–41). For instance, Tregs foundin the skeletal muscle can signal to local satellite (progenitor)cells and mediate tissue renewal (41) whereas conventionalhippocampal T cells can modulate neuronal synapse plasticity(39). In the present study, we confirmed that the heart is not anexception and that lymphocytes indeed seed the myocardiumunder steady-state conditions.Holzinger et al`

    runAnalysis(text, (ob) => {
        console.log("each:", ob)
    }, (ob) => {
        console.log("all:", ob)
    })
}

// Make triggerExample available globally
if (typeof window !== 'undefined') {
    window.triggerExample = triggerExample;
    console.log("✅ triggerExample function made globally available");
}