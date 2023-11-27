const Gallery = () => {
    const image = []
    return(
       <div className="w-full flex flex-row gap-2 p-5 h-56 md:h-96">
        <div className="w-1/2 h-full bg-slate-300 flex justify-center">
            <h1>Kegiatan</h1>
        </div>
        <div className="w-1/2 h-full bg-slate-200 flex justify-center">
            <h1>Event dan Lomba</h1>
        </div>
       </div>
    );
}
export default Gallery;